# Toolchain

## Building

[![pnpm](https://img.shields.io/badge/pnpm-orange?logo=pnpm&labelColor=grey)](https://pnpm.io/)
[![Lefthook](https://img.shields.io/badge/Lefthook-ff1e1e?labelColor=grey&logo=git)](https://github.com/evilmartians/lefthook/)
[![typescript](https://badges.aleen42.com/src/typescript.svg)](https://www.typescriptlang.org/)
[![vite](https://badges.aleen42.com/src/vitejs.svg)](https://vitejs.dev/)

## Testing

[![biome](https://img.shields.io/badge/Biome-blue?logo=biome&labelColor=grey)](https://biomejs.dev/)
[![stylelint](https://img.shields.io/badge/Stylelint-blue?logo=Stylelint&labelColor=grey)](https://stylelint.io/)
[![vitest](https://img.shields.io/badge/Vitest-729b1b?logo=Vitest&labelColor=grey)](https://cn.vitest.dev/guide/)
[![Testing Library](https://img.shields.io/badge/Testing_Library-E33332?logo=testinglibrary&labelColor=grey)](https://testing-library.com/docs/react-testing-library/intro/)
[![Faker](https://img.shields.io/badge/Mock-Faker-blue)](https://fakerjs.dev/api/)

## Components

[![react](https://img.shields.io/badge/React-149eca?logo=React&labelColor=grey)](https://beta.reactjs.org/)

## Options

[![AntDesign](https://img.shields.io/badge/AntDesign-blue?logo=antdesign&labelColor=grey)](https://ant-design.gitee.io/components/overview-cn/?theme=dark)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-06B6D4?logo=tailwindcss&labelColor=grey)](https://tailwindcss.com/docs/guides/vite)
[![TanstackQuery](https://img.shields.io/badge/TanstackQuery-FF4154?logo=reactquery&labelColor=grey)](https://tanstack.com/query/latest/docs/framework/react/overview/)
[![TanstackRouter](https://img.shields.io/badge/TanstackRouter-green?logo=reactquery&labelColor=grey)](https://tanstack.com/router/latest/docs/framework/react/overview)
[![PWA](https://img.shields.io/badge/PWA-35849a?logo=pwa&labelColor=grey)](https://vite-pwa-org.netlify.app/)

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
