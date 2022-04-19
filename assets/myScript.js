function myFunction(event) {
    let x = event.target.id;
    if (x == "balcony"){
       playAudio(1);
     } else if (x == "bathroom") {
       playAudio(2);
     } else if (x == "bed") {
       playAudio(3);
     } else if (x == "bottle") {
       playAudio(4);
     } else if (x == "chair") {
       playAudio(5);
     } else if (x == "clock") {
       playAudio(6);
     } else if (x == "glass") {
       playAudio(7);
     } else if (x == "curtains") {
       playAudio(8);
     } else if (x == "desk") {
       playAudio(9);
     } else if (x == "door") {
       playAudio(10);
     } else if (x == "dryer") {
       playAudio(11);
     } else if (x == "fork") {
       playAudio(12);
     } else if (x == "fridge") {
       playAudio(13);
     } else if (x == "yard") {
       playAudio(14);
     } else if (x == "grass") {
       playAudio(15);
     } else if (x == "heater") {
       playAudio(16);
     } else if (x == "kitchen") {
       playAudio(17);
     } else if (x == "kettle") {
       playAudio(18);
     } else if (x == "knife") {
       playAudio(19);
     } else if (x == "laundry") {
       playAudio(20);
     } else if (x == "library") {
       playAudio(21);
     } else if (x == "light") {
       playAudio(22);
     } else if (x == "loofah") {
       playAudio(23);
     } else if (x == "mirror") {
       playAudio(24);
     } else if (x == "blender") {
       playAudio(25);
     } else if (x == "cup") {
       playAudio(26);
     } else if (x == "oven") {
       playAudio(27);
     } else if (x == "painting") {
       playAudio(28);
     } else if (x == "path") {
       playAudio(29);
     } else if (x == "photo") {
       playAudio(30);
     } else if (x == "plant") {
       playAudio(31);
     } else if (x == "plate") {
       playAudio(32);
     } else if (x == "pot") {
       playAudio(33);
     } else if (x == "rubbish") {
       playAudio(34);
     } else if (x == "bench") {
       playAudio(35);
     } else if (x == "shelf") {
       playAudio(36);
     } else if (x == "shower") {
       playAudio(37);
     } else if (x == "sink2") {
       playAudio(38);
     } else if (x == "sink") {
       playAudio(39);
     } else if (x == "soap") {
       playAudio(40);
     } else if (x == "sofa") {
       playAudio(41);
     } else if (x == "spoon") {
       playAudio(42);
     } else if (x == "stove") {
       playAudio(43);
     } else if (x == "table") {
       playAudio(44);
     } else if (x == "tap") {
       playAudio(45);
     } else if (x == "toothbrush") {
       playAudio(46);
     } else if (x == "toothpaste") {
       playAudio(47);
     } else if (x == "towel") {
       playAudio(48);
     } else if (x == "tray") {
       playAudio(49);
     } else if (x == "tree") {
       playAudio(50);
     } else if (x == "tube") {
       playAudio(51);
     } else if (x == "dishwasher") {
       playAudio(52);
     } else if (x == "washer") {
       playAudio(53);
     } else if (x == "window") {
       playAudio(54);
     } else if (x == "worktop") {
       playAudio(55);
     } else if (x == "bath") {
       playAudio(56);
     } else if (x == "iron") {
       playAudio(57);
     }
   }
   function playAudio(z) {
     document.getElementById(z).play();
   }