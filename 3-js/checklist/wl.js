var TODO = {
	ToDos: [],
	displayTodo: function(){
		var size = this.ToDos.length
		if(size<1){
			document.getElementById('emptylist').innerHTML = "NOTHING TO-DO"
		} else {
			console.log("My Todos: \n");
			document.getElementById('emptylist').innerHTML = "";
			for(var i = 0; i<this.ToDos.length; i++){
				console.log(this.ToDos[i].Todotxt + "\t" + this.ToDos[i].status);	
			}
		}

	},
	addTodo: function(item){
		this.ToDos.push({
			Todotxt: item,
			status: false
		});
		UI.Display();
		//this.displayTodo();
	},
	changeTodo: function(item,update){ 
		this.ToDos[item].Todotxt = update;
		UI.Display()
	},
	deleteTodo: function(item){
		this.ToDos.splice(item,1);
		UI.Display()
	},
	toggleStatus: function(item){
		this.ToDos[item].status = !(this.ToDos[item].status) ;
		UI.Display()
	},

	toggleall: function(){
		for (var j = 0; j<this.ToDos.length; j++){	
				var allT = true;
				var Findex = 0;

				for(var k = 0; k<this.ToDos.length; k++){
					if(this.ToDos[k].status == false){
						allT = false;
						Findex = k; 
						break;
					}
				}

				if (allT == true){
					for(var n = 0; n<this.ToDos.length; n++)
						this.ToDos[n].status = false;

				break;

				} else {
					this.ToDos[Findex].status = true;

				}

			}
			UI.Display()
		} 
}

/*	
	for (var i = 0; i<this.ToDos.length; i++){	
			var allT = true;
			var Findex = 0;

			for(var i = 0; i<this.ToDos.length; i++){
				if(this.ToDos[i].status == false){
					allT = false;
					Findex = i; 
					break;
				}
			}

			if (allT == true){
				for(var i = 0; i<this.ToDos.length; i++)
					this.ToDos[i].status = false;
			break;

			} else {
				this.ToDos[Findex].status = true;

			}

		}
		UI.Display()
	} 
*/
		



var handlers = {
	Display: function(){TODO.displayTodo()},

	Toggleall: function(){TODO.toggleall()},

	Add: function(){
		//debugger;
		TODO.addTodo(newtodo.value)
		document.getElementById('newtodo').value = "";
	},

	Edit: function(){
		var item = document.getElementById('item').valueAsNumber
		var update = document.getElementById('update').value
		TODO.changeTodo(item,update)
		document.getElementById('item').value = "";
		document.getElementById('update').value = "";
	},

	Delete: function(position){
		TODO.deleteTodo(position);
	},

	Toggle: function(){
		var item = document.getElementById('toggle').valueAsNumber
		TODO.toggleStatus(item);
		document.getElementById('toggle').value = "";
	}
}

var UI = {
	/*
	 ADD: function(newtodo){
		var todoli = document.createElement('li');
		todoli.innerHTML = newtodo
		var todoUI = document.querySelector('ul');
		todoUI.appendChild(todoli)
	} */
	Display: function(){
		//debugger;
		var todoUI = document.querySelector('ul');
		todoUI.innerHTML = '';

		TODO.ToDos.forEach(function(element ,i){
			var todotxt = element.Todotxt; 
			var todoli = document.createElement('li');

			if (element.status == false){
				todoli.textContent = "( )" + todotxt;
			} else{
				todoli.textContent = "(x)" + todotxt;
			}

			todoli.id = i
			todoli.appendChild(this.DeleteButton(i));
			todoUI.appendChild(todoli)
		},this)
/*
		for (var i=0; i<TODO.ToDos.length; i++) {
			
			var todotxt = TODO.ToDos[i].Todotxt;
			var todoli = document.createElement('li');

			if (TODO.ToDos[i].status == false){
				todoli.textContent = "( )" + todotxt;
			} else{
				todoli.textContent = "(x)" + todotxt;
			}
arr.forEach(function callback(currentValue [, index [, array]]) {
			todoli.id = i
			todoli.appendChild(this.DeleteButton(i));
			todoUI.appendChild(todoli);
			
		}
*/
	},
	DeleteButton: function(i){
		var delbtn = document.createElement("BUTTON");
		delbtn.innerHTML = "delete"
		delbtn.className = 'delbtn'
		delbtn.id = i
		return delbtn
	},

	SetupEventList: function(){
		var todoul = document.querySelector('ul');
		todoul.addEventListener('click',function(event){
			var btnsel = event.target.parentNode.id;
			handlers.Delete(btnsel)
		})
	}


}


UI.SetupEventList()