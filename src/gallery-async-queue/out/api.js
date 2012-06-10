YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "AsyncQueue"
    ],
    "modules": [
        "async-queue"
    ],
    "allModules": [
        {
            "displayName": "async-queue",
            "name": "async-queue",
            "description": "<p>AsyncQueue allows you create a chain of function callbacks executed\nvia setTimeout (or synchronously) that are guaranteed to run in order.\nItems in the queue can be promoted or removed.  Start or resume the\nexecution chain with run().  pause() to temporarily delay execution, or\nstop() to halt and clear the queue.</p>"
        }
    ]
} };
});