## 调用方式：
- ts 引入： import util from '@/util/src';
- js 引入： import util from '@/util/dist';

## 编译：
`npm run build` or `yarn build`

## 文件目录：
```
├─ js  // 打包后的 js 文件（可删除）
│  ├─ ...
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ ts
│  ├─ browser.ts
│  ├─ dom.ts
│  ├─ index.ts
│  ├─ mdExplain.ts
│  ├─ type_array.ts  // 关于 JS 基本类型的方法都以 type_ 开头
│  ├─ type_date.ts
│  ├─ type_number.ts
│  ├─ type_object.ts
│  ├─ type_regexp.ts
│  └─ type_string.ts
└─ tsconfig.json

```