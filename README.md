# wavy-path

## Installation

```
npm install wavy-path
```

## Introduction

Project ini bertujuan untuk memudahkan proses coding / development nodejs terutama pada proses `require`. Biasanya untuk melakukan `require` dari nested folder, perlu menyertakan double dot untuk naik ke parent directory. 
Seperti `require("../../middleware")`, yang mana tidak nyaman untuk dibaca. Bagaimana jika kita ubah menjadi `require("~/middleware")`, jadi cukup mudah kan? Begitupula jika terdapat banyak module yang perlu dibuat symbolic link seperti ~ untuk root folder project.`

Project ini terinspirasi dari project milik [kolodny/wavy](https://github.com/kolodny/wavy)

## Fitur

Secara default library ini akan membuatkan symbolic link ~ ke root project.

Jika berkenan menambahkan symbolic link lain silakan membuat file config `wavy-path.config.json` di root project, kemudian hit `npx wavy-path` untuk melakukan update.

## Configuration

```json
[
  {
    "original": "src/module",
    "link": "module"
  }
]
```

`original` : path relative dari root project. Example : `src/module`
`link` : nama symlink yang bakal digunakan untuk path original tsb. Example `module` hasilnya menjadi `~module` ketika digunakan untuk require

### Note

1. Root path menjadi default symlink `~` , sehingga tidak perlu menambahkan symlink ke root project.
2. Semua symlink akan hilang ketika library di remove.

Semoga Bermanfaat
