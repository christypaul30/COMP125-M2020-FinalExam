let Game = (function(){

    // variable declarations
    let canvas:HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    let stage:createjs.Stage;
    
    let assets: createjs.LoadQueue;

    let exampleLabelLeft: UIObjects.Label;
    let exampleLabelRight: UIObjects.Label;
    let exampleButton: UIObjects.Button;
    
    //ID of images left and right
    let rollLeft:string ;
    let rollRight:string ;

    let assetManifest = 
    [
        {id:"1", src:"./Assets/images/1.png"},
        {id:"2", src:"./Assets/images/2.png"},
        {id:"3", src:"./Assets/images/3.png"},
        {id:"4", src:"./Assets/images/4.png"},
        {id:"5", src:"./Assets/images/5.png"},
        {id:"6", src:"./Assets/images/6.png"},
        {id:"backButton", src:"./Assets/images/startButton.png"},
        {id:"background", src:"./Assets/images/background.png"},
        {id:"blank", src:"./Assets/images/blank.png"},
        {id:"button", src:"./Assets/images/button.png"},
        {id:"nextButton", src:"./Assets/images/nextButton.png"},
        {id:"placeholder", src:"./Assets/images/placeholder.png"},
        {id:"resetButton", src:"./Assets/images/resetButton.png"},
        {id:"rollButton", src:"./Assets/images/rollButton.png"},
        {id:"startButton", src:"./Assets/images/startButton.png"},
        {id:"startOverButton", src:"./Assets/images/startOverButton.png"}
    ];

    function Preload():void
    {
        console.log(`%c Preload Function`, "color: grey; font-size: 14px; font-weight: bold;");
        assets = new createjs.LoadQueue(); // asset container 
        assets.installPlugin(createjs.Sound); // supports sound preloading
        assets.loadManifest(assetManifest);
        assets.on("complete", Start);
    }

    /**
     * This method initializes the CreateJS (EaselJS) Library
     * It sets the framerate to 60 FPS and sets up the main Game Loop (Update)
     */
    function Start():void
    {
        console.log(`%c Start Function`, "color: grey; font-size: 14px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = Config.Game.FPS;
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        
        Config.Game.ASSETS = assets; // make a reference to the assets in the global config

        Main();
    }

    /**
     * This function is triggered every frame (16ms)
     * The stage is then erased and redrawn 
     */
    function Update():void
    {
        stage.update();
    }

    /**
     * This is the main function of the Game (where all the fun happens)
     *
     */
    function Main():void
    {
        console.log(`%c Main Function`, "color: grey; font-size: 14px; font-weight: bold;");

        let temp = Util.Mathf.RandomRange(1,6);
        rollLeft=Math.floor(temp).toString();

        temp = Util.Mathf.RandomRange(1,6);
        rollRight=Math.floor(temp).toString();

        //moving label left and right
        exampleLabelLeft = new UIObjects.Label("An Example Label", "40px", "Consolas", "#000000", Config.Game.CENTER_X-100, 
        Config.Game.CENTER_Y, true);
        stage.addChild(exampleLabelLeft);

        exampleLabelRight = new UIObjects.Label("An Example Label", "40px", "Consolas", "#000000", Config.Game.CENTER_X+100, 
        Config.Game.CENTER_Y, true);
        stage.addChild(exampleLabelRight);

        //drawing images left and right
        stage.addChild(new Core.GameObject(rollLeft, Config.Game.CENTER_X-100,Config.Game.CENTER_Y-120,true));
        stage.addChild(new Core.GameObject(rollRight, Config.Game.CENTER_X+100,Config.Game.CENTER_Y-120,true));

        //roll button
        exampleButton = new UIObjects.Button("rollbutton", Config.Game.CENTER_X, Config.Game.CENTER_Y + 100, true);
        stage.addChild(exampleButton);

        exampleButton.on("click", ()=>{
            //roll dice
            rollEvent();
        });
    }

    //rolling event sets, images and labels
    function rollEvent():void{

        stage.clear();
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);

        //rolling random value 1
        let temp=Util.Mathf.RandomRange(1,6);
        rollLeft=Math.floor(temp).toString();

        //rolling random value 2
        temp=Util.Mathf.RandomRange(1,6);
        rollRight=Math.floor(temp).toString();

        //moving labels left and right
        exampleLabelLeft = new UIObjects.Label(rollLeft, "40px", "Consolas", "#000000", Config.Game.CENTER_X-100, 
        Config.Game.CENTER_Y, true);
        stage.addChild(exampleLabelLeft);

        exampleLabelRight = new UIObjects.Label(rollRight, "40px", "Consolas", "#000000", Config.Game.CENTER_X+100, 
        Config.Game.CENTER_Y, true);
        stage.addChild(exampleLabelRight);

        //drawing images left and right
        stage.addChild(new Core.GameObject(rollLeft, Config.Game.CENTER_X-100,Config.Game.CENTER_Y-120,true));
        stage.addChild(new Core.GameObject(rollRight, Config.Game.CENTER_X+100,Config.Game.CENTER_Y-120,true));

        //roll button
        exampleButton = new UIObjects.Button("rollbutton", Config.Game.CENTER_X, Config.Game.CENTER_Y + 100, true);
        stage.addChild(exampleButton);
    }

    window.addEventListener('load', Preload);


})();