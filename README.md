# OCARE CLINICAL X INTERFACE
Medical AI application. Display medical data for organization and normal user using machine learning to analyze the best solution for you.

copyright © 2022 Ocare Health Hub Co.Ltd.

## Project Info
- [Tasks](https://electric-foam-6c7.notion.site/91943609e1bf45ea8dd4823fd600a00e?v=42bde823099141bfa449c48b011cc918) (Notion)
- [Discord](https://discord.com/channels/1060879275877732372/1061524151510245396)
- [UX/UI](https://www.figma.com/file/Jvrsk4RaMddT0TSfo5ilXD/Ocare-(Shared-Project-Whole)?node-id=1490%3A2519&t=fS2cNvWTyGMR07lr-0) (Figma)
- Full Documentation (in progress...)

copyright © 2022 Ocare Health Hub Co.Ltd.

## Setup Locally
```
yarn # install dependencies
yarn dev # run development server
```
### Test
- login at https://atlasclient-auth.optimizecare.com/
- check cookie `access_token` and copy cookie value to
cypress/fixtures/accessToken.ts
```
yarn test # unit test
yarn cy:all # e2e test
```

### Build
```
yarn build
yarn start
```
or use docker
```
docker-compose up --build
```