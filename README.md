# SourceMapProblem

Setup instructions

1. Have yarn installed globally
2. Go to the library folder and run: yarn link. this will generate node module you can link too
3. Go to AureliaApp run: yarn link library.
4. Compile and run AureliaApp.
5. open developer tools on the browser that opens and click the text this should hit the debugger breakpoint in the library project but you will see the typescript file is empty.

Project Structure
AureliaApp: this should be your start up project to compile and bundle run: au run --watch
library: This represents our shared project that is added as a node module to the aurelia app
WebProject: This represents vanilla RequireJS setup project to show that debugging typescript source within this environment works fine.
