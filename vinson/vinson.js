(function () {
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.style['background-color'] = 'aqua';
    document.body.style.backgroundColor = 'green';
    container.innerText = 'hello';


    function createCarousel(parent, imgList) {
        const cContainer = document.createElement( tagName: 'div');
        const imgEl = document.createElement( tagName: 'img');

        imgEl.style.width = '300px';
        imgEl.style.height = '180px';
        imgEl.src = imgList[0];
        cContainer.appendChild(imgEl);
        parent.appendChild(cContainer);

        const leftButton = document.createElement(tagName: 'button');
        leftButton.innerText = '<';
        const rightButton = document.createElement(tagName: 'button');
        rightButton.innerText = '>';
        
        cContainer.prepend(leftButton);
        cContainer.append(rightButton);

        let imgIndex = 0;

        leftButton.addEventListener( type: 'click', listener: function() {
            imgIndex--;
            if(imgIndex < 0) {
                imgIndex = imgList.length - 1;
            }
            imgEl.scr = imgList[imgIndex];
        });

        rightButton.addEventListener( type: 'click', listener: function() {
            imgIndex++;
            if(imgIndex > imgList.length - 1) {
                imgIndex = 0;
            }
            imgEl.scr = imgList[imgIndex];
        });

        const opened = [];
        imgEl.addEventListener( type: 'click', listener: function(){
            imgList.forEach(path => {
                const img = document.createElement( tagname: 'img');
                img.src = path;
                img.style.width = '300px';
                img.style.height = '180px';
                img.classList.add('opened');
                cContainer.appendChild(img);
                opened = true;
            })
         } else {
            const allOpened = document.querySelectorAll( selectors: '.opened');
            allOpened.forEach( callbackfn: img => {
                img.remove();
            });
            opened = false;
            }
        })
    }



    createCarousel(container, imgList: ['https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=beautiful-blur-bright-326055.jpg&fm=jpg'])
    
])