import React, { Suspense } from "react";
const ListKeyComponent = React.lazy(()=> import ("./ListKeys"));
const FormComponent = React.lazy(()=>import("./Form"));
function LazyLoading(){
    return(
        <div>
            <Suspense fallback={<div>Loading Component ListKeyComponent...</div>}>
                <ListKeyComponent/>
            </Suspense>
            <Suspense fallback={<div>Loading Component FormComponent...</div>}>
                <FormComponent/>
            </Suspense>
        </div>
    )

}
export default LazyLoading;