
import {SelectGroupComponent} from './select-group.component'
import {TestComponent} from './do-test.component'
import {Routes,RouterModule} from '@angular/router'
import {ResuiltComponent} from './resuilt.component'
const routing: Routes=[
    {path:'',component: SelectGroupComponent},
    {path:'chu-de/:Id',component: TestComponent},
    {path:'ketqua',component: ResuiltComponent}
]
export const appRoutes = RouterModule.forRoot(routing); 