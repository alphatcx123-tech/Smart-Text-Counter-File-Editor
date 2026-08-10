pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

        const translations = {
            vi: {
                title: "✨ Đếm Văn Bản & Tập Tin",
                themeDark: "🌙 Tối",
                themeLight: "☀️ Sáng",
                chars: "Tổng ký tự",
                charsNoSpace: "Ký tự (không cách)",
                words: "Từ",
                paragraphs: "Đoạn văn",
                importBtn: "Tải file lên (.txt, .docx, .json, .md, .pdf)",
                dropHint: "Hoặc kéo & thả file vào đây",
                filenameLbl: "Tên file:",
                filenamePlaceholder: "van-ban-cua-toi",
                downloadBtn: "Tải về",
                placeholderText: "Nhập hoặc dán văn bản của bạn tại đây...",
                clearBtn: "🗑️ Xóa tất cả",
                copyBtn: "📋 Sao chép",
                reading: "Đang đọc tập tin...",
                readSuccess: "Đã đọc file thành công!",
                readError: "Lỗi khi đọc file!",
                noContent: "Không có nội dung để tải về!",
                copySuccess: "Đã sao chép vào bộ nhớ tạm!",
                exported: "Đã xuất file: "
            },
            en: {
                title: "✨ Text Counter & File Editor",
                themeDark: "🌙 Dark",
                themeLight: "☀️ Light",
                chars: "Total Characters",
                charsNoSpace: "Chars (no space)",
                words: "Words",
                paragraphs: "Paragraphs",
                importBtn: "Upload File (.txt, .docx, .json, .md, .pdf)",
                dropHint: "Or drag & drop a file here",
                filenameLbl: "File Name:",
                filenamePlaceholder: "my-document",
                downloadBtn: "Download",
                placeholderText: "Type or paste your text here...",
                clearBtn: "🗑️ Clear All",
                copyBtn: "📋 Copy Text",
                reading: "Reading file...",
                readSuccess: "File read successfully!",
                readError: "Error reading file!",
                noContent: "No content to download!",
                copySuccess: "Copied to clipboard!",
                exported: "Exported file: "
            }
        };

        let currentLang = 'vi';
        let currentTheme = 'light';

        const textInput = document.getElementById('text-input');
        const fileUpload = document.getElementById('file-upload');
        const customFilenameInput = document.getElementById('custom-filename');
        const toast = document.getElementById('toast');

        function toggleTheme() {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', currentTheme);
            document.getElementById('btn-theme').innerText = currentTheme === 'light' 
                ? translations[currentLang].themeDark 
                : translations[currentLang].themeLight;
        }

        function toggleLang() {
            currentLang = currentLang === 'vi' ? 'en' : 'vi';
            document.getElementById('btn-lang').innerText = currentLang === 'vi' ? '🌐 EN' : '🌐 VI';
            applyTranslations();
        }

        function applyTranslations() {
            const t = translations[currentLang];
            document.getElementById('txt-title').innerText = t.title;
            document.getElementById('btn-theme').innerText = currentTheme === 'light' ? t.themeDark : t.themeLight;
            document.getElementById('lbl-chars').innerText = t.chars;
            document.getElementById('lbl-chars-nospace').innerText = t.charsNoSpace;
            document.getElementById('lbl-words').innerText = t.words;
            document.getElementById('lbl-paragraphs').innerText = t.paragraphs;
            document.getElementById('lbl-import').innerText = t.importBtn;
            document.getElementById('lbl-drop-hint').innerText = t.dropHint;
            document.getElementById('lbl-filename').innerText = t.filenameLbl;
            customFilenameInput.placeholder = t.filenamePlaceholder;
            document.getElementById('lbl-download').innerText = t.downloadBtn;
            textInput.placeholder = t.placeholderText;
            document.getElementById('lbl-clear').innerText = t.clearBtn;
            document.getElementById('lbl-copy').innerText = t.copyBtn;
        }

        function updateStats() {
            const text = textInput.value;
            document.getElementById('char-count').innerText = text.length;
            document.getElementById('char-no-space').innerText = text.replace(/\s/g, '').length;

            const trimmedText = text.trim();
            if (trimmedText === '') {
                document.getElementById('word-count').innerText = 0;
                document.getElementById('paragraph-count').innerText = 0;
            } else {
                document.getElementById('word-count').innerText = trimmedText.split(/\s+/).length;
                document.getElementById('paragraph-count').innerText = text.split(/\n+/).filter(p => p.trim().length > 0).length;
            }
        }

        textInput.addEventListener('input', updateStats);

        // Đọc file dùng chung cho cả chọn file và kéo-thả.
        async function handleFile(file) {
            if (!file) return;

            const ext = file.name.split('.').pop().toLowerCase();
            const supported = ['txt', 'md', 'json', 'docx', 'pdf'];

            if (!supported.includes(ext)) {
                showToast(currentLang === 'vi'
                    ? 'Định dạng file không được hỗ trợ!'
                    : 'Unsupported file format!');
                return;
            }

            showToast(translations[currentLang].reading);

            const lastDot = file.name.lastIndexOf('.');
            const nameWithoutExt = lastDot > 0
                ? file.name.substring(0, lastDot)
                : file.name;
            customFilenameInput.value = nameWithoutExt;

            try {
                if (ext === 'txt' || ext === 'md') {
                    textInput.value = await file.text();

                } else if (ext === 'json') {
                    const text = await file.text();
                    try {
                        textInput.value = JSON.stringify(JSON.parse(text), null, 2);
                    } catch {
                        textInput.value = text;
                    }

                } else if (ext === 'docx') {
                    const arrayBuffer = await file.arrayBuffer();
                    const result = await mammoth.extractRawText({ arrayBuffer });
                    textInput.value = result.value;

                } else if (ext === 'pdf') {
                    const arrayBuffer = await file.arrayBuffer();
                    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
                    let fullText = '';

                    for (let i = 1; i <= pdf.numPages; i++) {
                        const page = await pdf.getPage(i);
                        const content = await page.getTextContent();
                        fullText += content.items.map(item => item.str).join(' ') + '\n\n';
                    }

                    textInput.value = fullText.trim();
                }

                updateStats();
                showToast(translations[currentLang].readSuccess);
            } catch (err) {
                console.error(err);
                showToast(translations[currentLang].readError);
            }

            // Cho phép chọn lại cùng một file lần nữa.
            fileUpload.value = '';
        }

        // Chọn file bằng nút.
        fileUpload.addEventListener('change', (e) => {
            handleFile(e.target.files[0]);
        });

        // Kéo & thả file.
        const dropZone = document.getElementById('drop-zone');

        ['dragenter', 'dragover'].forEach(eventName => {
            dropZone.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropZone.classList.add('drag-over');
            });
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropZone.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropZone.classList.remove('drag-over');
            });
        });

        dropZone.addEventListener('drop', (e) => {
            const files = e.dataTransfer.files;
            if (files && files.length > 0) {
                handleFile(files[0]);
            }
        });

        // Nhấn Enter/Space khi vùng kéo-thả đang được focus cũng mở hộp chọn file.
        dropZone.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                fileUpload.click();
            }
        });

        function downloadFile() {
            const text = textInput.value;
            if (!text) {
                showToast(translations[currentLang].noContent);
                return;
            }

            const format = document.getElementById('export-format').value;
            
            let rawFilename = customFilenameInput.value.trim();
            if (!rawFilename) {
                rawFilename = currentLang === 'vi' ? 'van-ban' : 'document';
            }
            
            const safeFilename = rawFilename.replace(/[/\\\\?%*:|"<>]/g, '');
            const finalFilename = `${safeFilename}.${format}`;

            if (format === 'docx') {
                const htmlContent = `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>${text.replace(/\n/g, '<br>')}</body></html>`;
                const converted = htmlDocx.asBlob(htmlContent);
                saveBlobAsFile(converted, finalFilename);
            } else if (format === 'pdf') {
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF();
                const splitText = doc.splitTextToSize(text, 180);
                doc.text(splitText, 10, 10);
                doc.save(finalFilename);
            } else if (format === 'json') {
                let content = text;
                try {
                    JSON.parse(text);
                } catch {
                    content = JSON.stringify({ content: text }, null, 2);
                }
                saveAsFile(content, finalFilename, 'application/json');
            } else {
                const mimeType = format === 'md' ? 'text/markdown' : 'text/plain';
                saveAsFile(text, finalFilename, mimeType);
            }

            showToast(translations[currentLang].exported + finalFilename);
        }

        function saveAsFile(content, filename, mimeType) {
            const blob = new Blob([content], { type: `${mimeType};charset=utf-8` });
            saveBlobAsFile(blob, filename);
        }

        function saveBlobAsFile(blob, filename) {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            link.click();
            URL.revokeObjectURL(link.href);
        }

        function clearText() {
            textInput.value = '';
            customFilenameInput.value = '';
            updateStats();
            textInput.focus();
        }

        function copyText() {
            if (!textInput.value) return;
            navigator.clipboard.writeText(textInput.value).then(() => {
                showToast(translations[currentLang].copySuccess);
            });
        }

        function showToast(message) {
            toast.innerText = message;
            toast.style.display = 'block';
            setTimeout(() => {
                toast.style.display = 'none';
            }, 2500);
        }
