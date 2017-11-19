var builderModule = (function () {
    var taskCount = 0;

    var textBox;
    var addBtn;

    function init() {
        initControls();
        initListeners();
    }

    function initControls() {
        textBox = document.getElementById(textBoxId);
        addBtn = document.getElementById(addBtnId);
    }

    function initListeners() {
        addBtn.addEventListener(eventTypeClick, add);
    }
    
    function createBtnOnItem(id, value) {
        var btn = document.createElement(elementNameBtn);
        btn.id = id;
        btn.className = btnRemoveClassName;
        btn.innerHTML = value;
    
        btn.addEventListener(eventTypeClick, remove);
    
        return btn;
    }
    
    function createItem(id, value) {
        var li = document.createElement(elementNameLi);
        li.id = taskCount;
        li.strike = false;
        li.className = itemClassName;
        li.innerHTML = value;
    
        li.addEventListener(eventTypeClick, strike);
    
        li.appendChild(createBtnOnItem(taskCount, btnRemoveValue));
    
        var list = document.getElementById(listId);
        list.appendChild(li);
    }
    
    function deleteItem(id, from) {
        var li = document.getElementById(id);
        var list = document.getElementById(listId);
        list.removeChild(li);
    }
    
    function add() {
        taskCount++;
        var task = textBox.value;
    
        if (textBox.value.replace(rt,'')) {
            createItem(taskCount, task);
            textBox.value = '';
        }
        else {
            alert(warningEmptyField);
        }
    }
    
    function remove() {   
        var id = this.getAttribute(attrNameId);
        deleteItem(id, listId);
    }
    
    function strike() {
        var id = this.getAttribute(attrNameId);
        var li = document.getElementById(id);
    
        if (li) {
            li.className = li.strike ? itemStrikeClassName : itemClassName;
            li.strike = !li.strike;
        }
    }

    return {
        init: init
    };
})();