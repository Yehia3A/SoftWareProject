"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    console.log('Starting the NestJS application...');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    console.log('Application initialized. Starting server...');
    await app.listen(process.env.PORT || 3000);
    console.log(`Application is running on: http://localhost:${process.env.PORT || 3000}`);
}
bootstrap();
//# sourceMappingURL=main.js.map