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
exports.usersFetch = exports.updatePhotoId = exports.updateAttendance = exports.usertype = exports.home = void 0;
const query_1 = require("../db/queries/query");
const home = (req, res) => {
    res.send("Backend Swift Home Route");
};
exports.home = home;
const usertype = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.id === "")
        res.send("Not enough detailes provided by the user");
    else {
        try {
            const userType = yield (0, query_1.userTypeQuery)(req.body.id);
            res.send(userType);
        }
        catch (error) {
            res.send(error);
        }
    }
});
exports.usertype = usertype;
const updateAttendance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.attendance === "" ||
        req.body.id === "" ||
        req.body.training_id === "")
        res.send("Not enough detailes provided by the user");
    else {
        try {
            yield (0, query_1.attendanceQuery)(req.body.attendance, req.body.id, req.body.training_id);
            res.send("changed Attendance");
        }
        catch (error) {
            res.send(error);
        }
    }
});
exports.updateAttendance = updateAttendance;
const updatePhotoId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.id === "")
        res.send("Not enough detailes provided by the user");
    else {
        try {
            yield (0, query_1.photoIdQuery)(req.body.id);
            res.send("changed photoid");
        }
        catch (error) {
            res.send(error);
        }
    }
});
exports.updatePhotoId = updatePhotoId;
const usersFetch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, query_1.usersFetchQuery)();
        res.send(users);
    }
    catch (error) {
        res.send(error);
    }
});
exports.usersFetch = usersFetch;
