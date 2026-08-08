# Smart-Text-Counter-File-Editor# 📝 Smart Text Counter & File Editor

<p align="center">
  <strong>⚡ A lightweight, powerful and privacy-friendly browser-based text processing tool.</strong>
</p>

<p align="center">
  Count • Edit • Import • Export • Convert • Copy
</p>

<p align="center">
  🌐 HTML5 &nbsp; • &nbsp; 🎨 CSS3 &nbsp; • &nbsp; ⚡ JavaScript &nbsp; • &nbsp; 🔒 Client-Side
</p>

---

## 🌟 Giới thiệu

**Smart Text Counter & File Editor** là một ứng dụng web nhỏ gọn được thiết kế để xử lý văn bản trực tiếp trên trình duyệt.

Ứng dụng kết hợp nhiều chức năng trong một giao diện duy nhất:

* 🔢 Đếm ký tự
* 🔤 Đếm từ
* 📑 Đếm đoạn văn
* 📂 Đọc file
* ✏️ Chỉnh sửa văn bản
* 📋 Sao chép nội dung
* 💾 Xuất văn bản
* 🌙 Dark Mode
* ☀️ Light Mode
* 🌐 Tiếng Việt / English

Điểm đặc biệt của dự án là **không cần backend riêng** cho các chức năng xử lý chính.

Người dùng có thể mở `index.html` và sử dụng ứng dụng trực tiếp.

---

# 🚀 Highlights

| Tính năng            |  Trạng thái |
| -------------------- | ----------: |
| 🔢 Character Counter |           ✅ |
| 🔤 Word Counter      |           ✅ |
| 📑 Paragraph Counter |           ✅ |
| 📂 TXT Import        |           ✅ |
| 📂 Markdown Import   |           ✅ |
| 📂 JSON Import       |           ✅ |
| 📂 DOCX Import       |           ✅ |
| 📂 PDF Import        |           ✅ |
| 💾 TXT Export        |           ✅ |
| 💾 Markdown Export   |           ✅ |
| 💾 JSON Export       |           ✅ |
| 💾 DOCX Export       |           ✅ |
| 💾 PDF Export        |           ✅ |
| 📋 Clipboard         |           ✅ |
| 🌙 Dark Mode         |           ✅ |
| ☀️ Light Mode        |           ✅ |
| 🌐 Vietnamese        |           ✅ |
| 🌐 English           |           ✅ |
| 📱 Responsive UI     |           ✅ |
| 🗄️ Database         | ❌ Không cần |
| 🖥️ Backend          | ❌ Không cần |

---

# ✨ Tính năng chi tiết

## 🔢 Smart Text Counter

Ứng dụng tự động phân tích nội dung trong textarea mỗi khi người dùng nhập hoặc chỉnh sửa văn bản.

Các thông số được tính:

### Tổng ký tự

Bao gồm cả:

* chữ
* số
* dấu câu
* khoảng trắng
* ký tự xuống dòng

Ví dụ:

```text
Hello World
```

Ứng dụng sẽ phân tích độ dài của chuỗi bằng JavaScript.

---

### 🔤 Ký tự không có khoảng trắng

Các whitespace được loại bỏ trước khi tính.

Ví dụ:

```text
Hello World
```

sẽ không tính khoảng trắng giữa `Hello` và `World`.

---

### 📝 Word Counter

Từ được xác định dựa trên các nhóm ký tự được phân tách bởi whitespace.

Ví dụ:

```text
Hello World from ATCX
```

→ `4` từ.

---

### 📑 Paragraph Counter

Các đoạn văn được xác định dựa trên các dòng không rỗng.

Ví dụ:

```text
Đoạn 1

Đoạn 2

Đoạn 3
```

→ `3` đoạn.

---

# 📂 File Import

Ứng dụng hỗ trợ đọc nhiều loại file.

## 📄 TXT

Đọc trực tiếp nội dung văn bản.

```text
.txt
```

---

## 📝 Markdown

Có thể mở file:

```text
.md
```

và đưa nội dung vào trình chỉnh sửa.

---

## 🗃️ JSON

JSON hợp lệ sẽ được parse và format lại với indentation.

Ví dụ:

```json
{
  "name": "ATCX",
  "project": "Smart Text Counter"
}
```

Nếu JSON không hợp lệ, ứng dụng vẫn giữ nội dung dưới dạng text thay vì làm chương trình dừng.

---

## 📘 DOCX

Ứng dụng sử dụng **Mammoth.js** để trích xuất raw text từ file Microsoft Word.

```text
.docx
```

---

## 📕 PDF

Ứng dụng sử dụng **PDF.js** để:

1. Đọc file PDF.
2. Xác định số trang.
3. Đọc từng trang.
4. Lấy text content.
5. Ghép nội dung thành một chuỗi.
6. Đưa vào trình chỉnh sửa.

```text
.pdf
```

---

# 💾 File Export

Sau khi chỉnh sửa, người dùng có thể xuất nội dung thành:

```text
.txt
.md
.json
.docx
.pdf
```

## TXT

Xuất văn bản thuần.

## Markdown

Xuất nội dung dưới dạng Markdown.

## JSON

Nếu nội dung đã là JSON hợp lệ, ứng dụng giữ nguyên cấu trúc.

Nếu không phải JSON hợp lệ, nội dung sẽ được đóng gói thành:

```json
{
  "content": "Your text here"
}
```

## DOCX

Ứng dụng chuyển nội dung thành HTML rồi sử dụng `html-docx-js` để tạo Blob DOCX.

## PDF

Ứng dụng sử dụng `jsPDF` để tạo tài liệu PDF trực tiếp trên trình duyệt.

---

# 🌙 Dark Mode

Giao diện hỗ trợ hai theme:

```text
☀️ Light Mode
🌙 Dark Mode
```

Theme được triển khai bằng CSS Custom Properties.

Ví dụ:

```css
:root {
    --card-bg: #ffffff;
    --text-color: #2d3748;
}

[data-theme="dark"] {
    --card-bg: #1e293b;
    --text-color: #f1f5f9;
}
```

JavaScript chỉ cần thay đổi:

```text
data-theme
```

trên phần tử `<html>`.

---

# 🌐 Multi-language

Ứng dụng hiện hỗ trợ:

🇻🇳 **Tiếng Việt**

🇬🇧 **English**

Các text giao diện được quản lý thông qua object:

```javascript
const translations = {
    vi: {
        ...
    },

    en: {
        ...
    }
};
```

Điều này giúp việc bổ sung ngôn ngữ mới trong tương lai dễ dàng hơn.

---

# 📋 Clipboard

Người dùng có thể sao chép toàn bộ nội dung bằng Clipboard API.

```javascript
navigator.clipboard.writeText(text)
```

Sau khi thành công, ứng dụng hiển thị thông báo.

---

# 🧠 Kiến trúc hệ thống

Đây là một:

> **Client-Side Static Web Application**

Kiến trúc cơ bản:

```text
                    👤 USER
                       │
                       ▼
                🌐 index.html
                       │
             ┌─────────┴─────────┐
             ▼                   ▼
        🎨 style.css        ⚡ script.js
                                 │
             ┌───────────────────┼───────────────────┐
             │                   │                   │
             ▼                   ▼                   ▼
        📄 File Reader      🔢 Text Engine      💾 Export Engine
             │                   │                   │
       ┌─────┼─────┐             │          ┌────────┼────────┐
       ▼     ▼     ▼             ▼          ▼        ▼        ▼
      TXT   DOCX  PDF        Statistics    TXT      DOCX     PDF
             │
             ▼
       External Libraries
```

---

# 🛠️ Công nghệ

## Frontend

### 🌐 HTML5

Dùng để xây dựng cấu trúc giao diện.

### 🎨 CSS3

Dùng để:

* layout
* responsive design
* theme
* animation
* typography
* component styling

### ⚡ JavaScript

Là phần xử lý logic chính:

* Counter
* File Reader
* Theme
* Language
* Clipboard
* Export
* Toast notification

---

# 📚 External Libraries

Dự án sử dụng:

| Library         | Mục đích |
| --------------- | -------- |
| 📘 Mammoth.js   | Đọc DOCX |
| 📕 PDF.js       | Đọc PDF  |
| 📄 jsPDF        | Tạo PDF  |
| 📝 html-docx-js | Tạo DOCX |

Các thư viện được tải thông qua CDN.

---

# 📁 Cấu trúc project

```text
Smart_Text_Counter_File_Editor/
│
├── 🌐 index.html
│
├── 🎨 style.css
│
└── ⚡ script.js
```

### `index.html`

Chứa:

* HTML structure
* UI components
* external library imports
* các element cần JavaScript điều khiển

### `style.css`

Chứa toàn bộ:

* màu sắc
* layout
* button
* card
* input
* textarea
* responsive styling
* light/dark theme

### `script.js`

Chứa:

* application state
* translations
* statistics
* file import
* file export
* theme switching
* language switching
* clipboard
* toast notification

---

# ⚙️ Cách hoạt động

## 1️⃣ Người dùng nhập text

```text
User
 ↓
<textarea>
 ↓
input event
 ↓
updateStats()
 ↓
Statistics
```

## 2️⃣ Người dùng tải file

```text
File
 ↓
File API
 ↓
Detect extension
 ↓
Parser tương ứng
 ↓
Textarea
 ↓
updateStats()
```

## 3️⃣ Người dùng xuất file

```text
Textarea
 ↓
Select format
 ↓
Export Engine
 ↓
Blob
 ↓
Download
```

---

# 🔐 Privacy

Một ưu điểm của kiến trúc client-side là ứng dụng không cần server riêng để thực hiện các thao tác xử lý văn bản chính.

Không có:

```text
❌ Database server
❌ PHP backend
❌ Node.js backend
❌ API server riêng
```

Dữ liệu được xử lý trong môi trường trình duyệt.

> Tuy nhiên, ứng dụng vẫn tải một số thư viện JavaScript từ CDN, vì vậy thiết bị cần kết nối Internet để tải các thư viện đó khi cần.

---

# ⚡ Performance

Dự án được thiết kế theo hướng:

> **Lightweight + Client-Side Processing**

Không cần khởi động:

```text
Docker
Database
Backend Server
Runtime Server
```

Chỉ cần:

```text
Browser → index.html
```

Điều này khiến dự án phù hợp với các nền tảng static hosting.

---

# 🌍 Deployment

Có thể triển khai trên nhiều nền tảng static hosting.

Ví dụ:

```text
GitHub Pages
Cloudflare Pages
Netlify
Vercel
InfinityFree
```

Không cần VPS cho phiên bản frontend hiện tại.

---

# 📱 Responsive Design

Giao diện sử dụng CSS Flexbox và CSS Grid để thích ứng với nhiều kích thước màn hình.

Có thể sử dụng trên:

* 📱 Smartphone
* 📲 Tablet
* 💻 Laptop
* 🖥️ Desktop

---

# 🎯 Use Cases

## 👨‍🎓 Học sinh / sinh viên

Đếm:

* số từ bài luận
* số ký tự
* số đoạn văn

## ✍️ Writer

Kiểm tra độ dài nội dung.

## 👨‍💻 Developer

Đọc nhanh file text, Markdown hoặc JSON.

## 📄 Document Processing

Chuyển đổi nội dung giữa nhiều định dạng.

## 🧪 Testing

Có thể dùng project để thử nghiệm:

* File API
* Blob API
* Clipboard API
* DOM manipulation
* Client-side parsing

---

# 🧩 Điểm thú vị về kỹ thuật

### 💡 1. Không phải cứ có JavaScript là web động

Project có JavaScript rất nhiều nhưng vẫn được xem là **Static Web Application** vì không cần server-side backend riêng.

```text
Static ≠ Không có JavaScript
```

---

### 💡 2. Trình duyệt có thể xử lý file

JavaScript trên browser có thể sử dụng:

```text
File API
Blob API
ArrayBuffer
Clipboard API
DOM API
```

để xử lý dữ liệu mà không nhất thiết phải upload file lên server.

---

### 💡 3. File export không cần server

Ứng dụng có thể tạo:

```javascript
new Blob(...)
```

sau đó tạo một URL tạm thời và kích hoạt download.

Vì vậy:

```text
Text
 ↓
Blob
 ↓
Object URL
 ↓
Download
```

---

### 💡 4. Một file HTML có thể trở thành cả ứng dụng

Không cần framework lớn như:

```text
React
Vue
Angular
Next.js
```

project vẫn có thể xây dựng một ứng dụng hoàn chỉnh bằng:

```text
HTML + CSS + JavaScript
```

---

# 🔮 Roadmap

Các tính năng có thể phát triển trong tương lai:

* [ ] 🔍 Find & Replace
* [ ] ↩️ Undo / Redo
* [ ] 📊 Reading Time
* [ ] 📈 Text Statistics nâng cao
* [ ] 🔡 Character Frequency
* [ ] 📚 Sentence Counter
* [ ] 🔤 Letter Frequency
* [ ] 🧹 Remove Extra Spaces
* [ ] 🔄 Text Case Converter
* [ ] 🔠 UPPERCASE / lowercase
* [ ] 📝 Markdown Preview
* [ ] 🎨 Syntax Highlighting
* [ ] 🗂️ Drag & Drop File
* [ ] 📦 ZIP Import / Export
* [ ] 💾 LocalStorage
* [ ] ⌨️ Keyboard Shortcuts
* [ ] 🖥️ Fullscreen Editor
* [ ] 📱 PWA
* [ ] 📴 Offline Mode
* [ ] 🤖 AI Writing Assistant
* [ ] 🔐 Client-side Encryption
* [ ] 🌍 Thêm nhiều ngôn ngữ

---

# 🏆 Project Philosophy

Smart Text Counter & File Editor hướng đến ba nguyên tắc:

### ⚡ Simple

Dễ sử dụng.

### 🚀 Fast

Xử lý trực tiếp trên client.

### 🔒 Privacy-Friendly

Hạn chế phụ thuộc vào backend cho các thao tác xử lý nội dung.

---

# 📊 Project Summary

```text
Project       : Smart Text Counter & File Editor
Organization  : ATCX
Type          : Static Web Application
Frontend      : HTML / CSS / JavaScript
Backend       : None
Database      : None
Deployment    : Static Hosting
Languages     : Vietnamese / English
File Import   : TXT / MD / JSON / DOCX / PDF
File Export   : TXT / MD / JSON / DOCX / PDF
Theme         : Light / Dark
Architecture  : Client-Side
```

---

# 🧪 Browser Compatibility

Project được thiết kế cho các trình duyệt hiện đại có hỗ trợ:

* ES6+
* File API
* Blob API
* Clipboard API
* CSS Grid
* CSS Custom Properties
* Async/Await

Khuyến nghị sử dụng phiên bản mới của:

```text
Google Chrome
Microsoft Edge
Mozilla Firefox
Safari
```

---

# 📜 License

© 2026 **ATCX**. All rights reserved.

Dự án và mã nguồn thuộc quyền sở hữu của **ATCX**.

Việc sao chép, phân phối hoặc sử dụng lại toàn bộ project cho mục đích thương mại cần có sự cho phép của tác giả.

---

# ❤️ Made by ATCX

> **Build simple. Think deep. Create useful things.**

📝 **Smart Text Counter & File Editor**

⚡ Lightweight.
🌐 Browser-based.
🔒 Client-side.
🚀 Built with Web Technologies.

---

<p align="center">
  <strong>© 2026 ATCX — Smart Text Counter & File Editor</strong>
</p>
