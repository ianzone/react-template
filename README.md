# Toolchain

<!-- <a href=""><img src=''></a> -->

<table>
  <tr>
    <th>Tasks</th>
    <th>Tools</th>
    <th>Options</th>
  </tr>
  <tr>
    <td>Building</td>
    <td>
      <a href="https://pnpm.io/zh/installation"><img src='https://img.shields.io/badge/pnpm-orange?logo=pnpm&labelColor=grey'></a>
      <a href="https://www.typescriptlang.org/"><img src='https://badges.aleen42.com/src/typescript.svg'></a>
      <a href="https://cn.vitejs.dev/"><img src='https://badges.aleen42.com/src/vitejs.svg'></a>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Linting</td>
    <td>
      <a href="https://biomejs.dev/zh-cn/guides/getting-started/"><img src='https://img.shields.io/badge/Biome-blue?logo=biome&labelColor=grey'></a>
      <a href="https://stylelint.io/"><img src='https://img.shields.io/badge/Stylelint-blue?logo=Stylelint&labelColor=grey'></a>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Testing</td>
    <td>
      <a href="https://cn.vitest.dev/guide/"><img src='https://img.shields.io/badge/Vitest-729b1b?logo=Vitest&labelColor=grey'></a>
      <a href="https://testing-library.com/docs/react-testing-library/intro/"><img src='https://img.shields.io/badge/Testing_Library-E33332?logo=testinglibrary&labelColor=grey'></a>
      <a href="https://fakerjs.dev/api/"><img src='https://img.shields.io/badge/Mock-Faker-blue'></a>
    </td>
    <td>
      <a href="https://playwright.dev/docs/intro"><img src='https://img.shields.io/badge/Playwright-2EAD33?logo=playwright&labelColor=grey'></a>
    </td>
  </tr>
  <tr>
    <td>CI/CD</td>
    <td>
      <a href="https://github.com/evilmartians/lefthook/"><img src='https://img.shields.io/badge/Lefthook-ff1e1e?labelColor=grey&logo=git'></a>
    </td>
    <td>
      <a href="https://semantic-release.gitbook.io/semantic-release"><img src='https://img.shields.io/badge/semantic-e10079?logo=semantic-release&labelColor=grey'></a>
    </td>
  </tr>
  <tr>
    <td>Components</td>
    <td>
      <a href="https://react.dev/learn"><img src='https://img.shields.io/badge/React-149eca?logo=React&labelColor=grey'></a>
    </td>
    <td>
      <a href="https://ant-design.gitee.io/components/overview-cn/?theme=dark"><img src='https://img.shields.io/badge/AntDesign-blue?logo=antdesign&labelColor=grey'></a>
      <a href="https://tailwindcss.com/docs/guides/vite"><img src='https://img.shields.io/badge/tailwindcss-06B6D4?logo=tailwindcss&labelColor=grey'></a>
      <a href="https://ui.shadcn.com/"><img src='https://img.shields.io/badge/shadcnui-06B6D4?logo=shadcnui&labelColor=grey'></a>
      <a href="https://tanstack.com/query/latest/docs/framework/react/overview/"><img src='https://img.shields.io/badge/TanstackQuery-FF4154?logo=reactquery&labelColor=grey'></a>
      <a href="https://tanstack.com/router/latest/docs/framework/react/overview"><img src='https://img.shields.io/badge/TanstackRouter-green?logo=reactquery&labelColor=grey'></a>
      <a href="https://vite-pwa-org.netlify.app/"><img src='https://img.shields.io/badge/PWA-35849a?logo=pwa&labelColor=grey'></a>
    </td>
  </tr>
</table>

### [Options](https://zhuanlan.zhihu.com/p/546697951)

### Icons

[react-icons](https://react-icons.github.io/react-icons/)

### Feedbacks

[react-hot-toast](https://react-hot-toast.com/)

# Get it started

```
degit https://github.com/ianzone/react-template <project name>
cd <project name>
pnpm i
pnpm run dev
```

# Folder structure

| Folder      | Description                                      |
| ----------- | ------------------------------------------------ |
| assets/     | Static assets such as images, videos, audios...  |
| components/ | Pure components                                  |
| containers/ | Components with business logics and side effects |
| contexts/   | Shared contexts                                  |
| hooks/      | Stateful functions                               |
| utils/      | Stateless functions                              |
| pages/      | Pages                                            |
| services/   | API calls                                        |
| styles/     | Global css, fonts                                |

# TODO

replace stylelint with biome when css support is done. https://github.com/biomejs/biome/issues/2409
