"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersFetchQuery = exports.userTypeQuery = exports.photoIdQuery = exports.attendanceQuery = void 0;
const config_1 = require("../config/config");
const attendanceQuery = (attendance, id, training_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield config_1.database.query(`UPDATE training_user SET attendance=${attendance} WHERE user_id='${id}' and training_id='${training_id}'`);
    }
    catch (error) {
        return error;
    }
});
exports.attendanceQuery = attendanceQuery;
const photoIdQuery = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield config_1.database.query(`UPDATE app_users SET photo_id=true WHERE id='${id}'`);
    }
    catch (error) {
        return error;
    }
});
exports.photoIdQuery = photoIdQuery;
const userTypeQuery = (id) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const userTypeIdJSON = yield config_1.database.query(`SELECT user_type FROM app_users WHERE id='${id}'`);
        const userTypeId = (_a = userTypeIdJSON[0][0]) === null || _a === void 0 ? void 0 : _a.user_type;
        const userTypeJSON = yield config_1.database.query(`SELECT name FROM user_type WHERE type=${userTypeId}`);
        const userType = (_b = userTypeJSON[0][0]) === null || _b === void 0 ? void 0 : _b.name;
        return userType;
    }
    catch (error) {
        return error;
    }
});
exports.userTypeQuery = userTypeQuery;
const usersFetchQuery = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield config_1.database.query(`SELECT 
    users.id,
    users.user_name,
    users.dob,
    users.email,
    users.photo_id,
    users.user_name,
    trainings.attendance,
    trainings.training_id
    FROM app_users AS users 
    JOIN training_user AS trainings
    ON users.id = trainings.user_id`);
        return users;
    }
    catch (error) {
        return error;
    }
});
exports.usersFetchQuery = usersFetchQuery;
