# Grond
Compiles-to-JS golfing languege  
input is always taken first thing unless the `§` charector is at the begining of the program    
input is stored in the variable `s` and is printed at the end of the program unless equal to the string literal `""`  
The math module can be inported by typing the `Ś` charector as the first or second charector of the program  
The math module simply wraps the compiled program in `with(math){ ... }`  
##Problems
- If your program contains every ascii charector, the compiler will fidget. I think I need to make it throw an error... //TODO  
- Probobly a whole bunch of other problems I haven't found yet, if you find one go ahead and fix it and submit a pull request  
- My gut tells me that the code is awful, if you want to improve it *please do*  




