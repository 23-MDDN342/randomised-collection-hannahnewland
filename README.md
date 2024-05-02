[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/uYb6fuja)
## 2024 MDDN342 Assignment 2: Randomised Collections

Fruit Salad Party!

My initial idea is a variety of different fruits that have interchanging facial features. I want them to look annoying-orange-esque, maybe encorporating real images of human features or maybe just drawing them on javascript. 

I started by creating the apple in the editor, playing around with the eyes and mouth positioning. The apple has three eye values, where it has between 1-3 eyes. I then made its mouth, which will go on to be one of a few mouth options for the fruit.

I then moved onto the grapes. I initally wanted to do a banana, but after a lot of scribbling in my sketchbook trying to work out the best way to draw an accurately shaped banana using vertex points, I decided it would be less time consuming to do something a bit simpler, so I chose grapes. I wanted them all to be different colours, so I made an array of purples and pinks and used push and pop to make each ellipse a random colour from the array. 

While working on the grapes, I decided that the fruit reminded me of the dancing fruit baby sensory videos (like this one: https://youtu.be/b65MoVwANq4?si=R4O-3wTCvL4QHD9D), and I wanted the background to be black to mimic those videos.

The grapes, like the apple, have 1-3 eye options. The intial eyes I made for the grapes are different from the apple's, and they will become an option for all fruit. The grapes have a simpler initial mouth, just a curve with a black stroke. 

The grapes became a bit of a test rabbit for noses before I moved on to the pear. I realised when I went to add the noses to the apple that they just wouldn't work because I had built the apple first without factoring in space for the noses. I  decided to leave the apple without noses because I prefer how it looks without, and didn't want to sacrifice what I already thought looked good. 

Because of this, when I made the pear I made sure to paste the nose functions in first so I knew they would fit around the eyes. The pear is different from the apple and grapes as it only has 1 or 2 eyes. I felt as if 3 eyes would take up a lot of space in the shape, and I preferred the look of 2. 

Working on the pear's mouth is where I began to add the features from each fruit to one another. Once I had added all the eye variations to the apple, I was able to basically just copy and paste them between fruit, with some variations with positioning. I did the same with the mouths.

I then moved onto the eyebrows. They have 3 parameters: whether or not there are eyebrows, how tall they are, and how wide they are. 

When I made the arrangement, I made them be 3 in a row and dancing side to side like the fruit video. However, this is where I hit a huge problem.

The random function was not working properly (a p5js problem), and the fruit would not rotate randomly. After a lot of attempts at fixing it, the solution was not using random(), but to use math.random. 

Once that issue was resolved, I moved on to the random methods.

Random Methods: Weighted selection and conditional randomness together!

I wanted each fruit to have their 'original' facial features show up more frequently than the others. The weighted selection and conditional randomness work together in my code, hence why I'm talking about them together.

The weighted selection appears with each fruit. It calls FRUITNAMEFeatures, and then the result, if less than 70 out of 100, calls the original features. This means that with each fruit, there is a 70% chance of their original features showing, as opposed to other features. 

The conditional randomness appears in the pear. When the pear has 2 of it's original eyes, it will always have eyebrows, and the chances of them being the biggest eyebrows is higher. I think it looks great with eyebrows like that, so I wanted to make sure it always had them. 


My final parameters are as follows:

tilt_value: this determines the tilt the fruit experiences. It is continuous. It's bounds are (-90,90).

mouth_type: this determines what mouth the fruit will have, or if it will have one at all. It is discrete.  It's bounds are (1,4).

nose_type: this determines what nose the fruit will have, or if it will have one at all. It is discrete. It's bounds are (1,4).

eye_value:this determines how many eyes the fruit has. It is discrete. It's bounds are (1,3).

eye_type: this determines what eyes the fruit will have, or if it will have any at all. It is discrete. It's bounds are (1,4). 

eyebrows_yesno: this determines if the fruit has eyebrows. It is discrete. Its bounds are (1,3).

eyebrow_height: this determines the height of the fruit's eyebrows. It is continuous. Its bounds are (0,6).

eyebrow_length: this determines the length of the fruit's eyebrows. It is continuous. Its bounds are (0,7). 

My final work takes inspiration from the annoying orange and the dancing fruit sensory videos. The fruit have various different facial features that randomly are allocated, with their 'original' features being more likely. They rotate side to side. 

