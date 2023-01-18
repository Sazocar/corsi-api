"use strict";
exports.__esModule = true;
var memoryimpIuserrepo_1 = require("src/User/Infrastructure/memoryimpIuserrepo");
var getemails_1 = require("src/course/domain/domain service/getemails");
var inmemoryadapter_1 = require("src/course/infrastructure/repositories/inmemoryadapter");
var repo1 = new memoryimpIuserrepo_1.MemoryImpIuser();
var repo2 = new inmemoryadapter_1.MemoryImpCourses();
var getemail = new getemails_1.GetEmails(repo1, repo2);
var aux = repo1.getAll();
for (var _i = 0, aux_1 = aux; _i < aux_1.length; _i++) {
    var i = aux_1[_i];
    console.log(i);
}
