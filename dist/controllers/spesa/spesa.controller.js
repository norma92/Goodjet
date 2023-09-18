"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeseController = void 0;
const common_1 = require("@nestjs/common");
const CreateSpese_dto_1 = require("../../dots/CreateSpese.dto");
const spesa_service_1 = require("../../services/spesa/spesa.service");
let SpeseController = class SpeseController {
    constructor(spesaService) {
        this.spesaService = spesaService;
    }
    async getSpese() {
        const spese = await this.spesaService.findSpese();
        return spese;
    }
    createSpesa(createSpesaDto) {
        this.spesaService.createSpesa(createSpesaDto);
    }
};
exports.SpeseController = SpeseController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpeseController.prototype, "getSpese", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateSpese_dto_1.CreateSpesaDto]),
    __metadata("design:returntype", void 0)
], SpeseController.prototype, "createSpesa", null);
exports.SpeseController = SpeseController = __decorate([
    (0, common_1.Controller)('spese'),
    __metadata("design:paramtypes", [spesa_service_1.SpeseService])
], SpeseController);
//# sourceMappingURL=spesa.controller.js.map