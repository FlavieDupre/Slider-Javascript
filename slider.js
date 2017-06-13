function Slider(images, elementId){
	this.images = images;
	this.element = document.querySelector('#' + elementId);
	this.index = 0;
	this.createSlider();
	
}

Slider.prototype.createSlider = function(){
	if(this.images.length === 0) return;
	this.img= document.createElement('img');
	this.img.src = this.images[this.index];
	this.element.appendChild(this.img);

	var div = document.createElement('div');
	this.element.appendChild(div);

	// je crée mes boutons
	this.createButton(div, 'Play', this.play);
	this.createButton(div, 'Pause', this.pause);
	this.createButton(div, 'Prev', this.previous);
	this.createButton(div, 'Next', this.next);
	this.createButton(div, 'Rand', this.random);

}

Slider.prototype.createButton = function(parent, nom, clickFunction){
	var btn = document.createElement('button');
	btn.innerText = nom;
	btn.onclick = clickFunction.bind(this);
	parent.appendChild(btn);
}

Slider.prototype.play = function() {
	this.pause();
	this.display = setInterval(this.next.bind(this),2000);
}

Slider.prototype.pause = function() {
	clearInterval(this.display);
	clearInterval(this.random);
}

Slider.prototype.previous = function() {
	this.index = this.index > 0 ? this.index - 1 : this.images.length -1;
	this.show();
}

Slider.prototype.next = function() {
	this.index = this.index < this.images.length -1 ? this.index + 1 : 0;
	this.show();
}

Slider.prototype.random = function() {
	// tant que mon nbr aléatoire est égal à mon index
	// je suis sur l'image courante et donc je regénère un nbr aléatoire
	do{
		// je récupère un nombre aléatoire entre 0 et mon index maximum
		var random = Math.floor(Math.random()*this.images.length);
	} while(this.index === random);
	// lorsque j'ai un nombre aléatoire différent de l'index courant
	// j'affiche l'image correspondante
	this.index = random;
	this.show();
}

Slider.prototype.show = function() {
	this.img.src = this.images[this.index];
}

