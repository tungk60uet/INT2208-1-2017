"use strict";
var select_group_component_1 = require("./select-group.component");
var do_test_component_1 = require("./do-test.component");
var router_1 = require("@angular/router");
var resuilt_component_1 = require("./resuilt.component");
var routing = [
    { path: '', component: select_group_component_1.SelectGroupComponent },
    { path: 'chu-de/:Id', component: do_test_component_1.TestComponent },
    { path: 'ketqua', component: resuilt_component_1.ResuiltComponent }
];
exports.appRoutes = router_1.RouterModule.forRoot(routing);
//# sourceMappingURL=app.routes.js.map