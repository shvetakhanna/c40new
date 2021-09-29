class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

///function created to set the positions of all the elements
  setElementsPosition()
  {
    this.input.position(width/2-110,height/2-80);
    this.playButton.position(width/2-90, height/2-20);
    this.titleImg.position(120,50)
    this.titleImg.size(width/2-300,50)
    this.greeting.position(width/2-300,height/2-100)
  }
  //function created to set the style of all the elements
  setElementsStyle()
  {
    this.input.class("customInput")
    this.playButton.class("customButton")
   this.titleImg.class("gameTitle")
    this.greeting.class("greeting")
  }

  handleMousePressed()
  {
    this.playButton.mousePressed(()=>{
      this.input.hide();
      this.playButton.hide();
      var m=`Hello ${this.input.value()}
    </br> wait for other players to join...   `
      
      this.greeting.html(m)
      playerCount++;
      player.name=this.input.value();
      player.index=playerCount;
      player.addPlayer();
      player.updateCount(playerCount)
      player.getDistance();
    })
  }

  display()
  {
this.setElementsPosition();
this.setElementsStyle();
this.handleMousePressed();
  }
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

}
