(define (problem prob001)
 (:domain floor-tile)
 (:objects tile_0-1 tile_0-2 tile_0-3 
           tile_1-1 tile_1-2 tile_1-3 
           tile_2-1 tile_2-2 tile_2-3 
           tile_3-1 tile_3-2 tile_3-3 - tile
           robot1 robot2 - robot
           red black - color
)
 (:init 
   (= (total-cost) 0)
   (robot-at robot1 tile_0-1)
   (robot-has robot1 red)
   (robot-at robot2 tile_2-2)
   (robot-has robot2 black)
   (available-color red)
   (available-color black)
   (clear tile_0-2)
   (clear tile_0-3)
   (clear tile_1-1)
   (clear tile_1-2)
   (clear tile_1-3)
   (clear tile_2-1)
   (clear tile_2-3)
   (clear tile_3-1)
   (clear tile_3-2)
   (clear tile_3-3)
   (up tile_1-1 tile_0-1)
   (up tile_1-2 tile_0-2)
   (up tile_1-3 tile_0-3)
   (up tile_2-1 tile_1-1)
   (up tile_2-2 tile_1-2)
   (up tile_2-3 tile_1-3)
   (up tile_3-1 tile_2-1)
   (up tile_3-2 tile_2-2)
   (up tile_3-3 tile_2-3)
   (down tile_0-1 tile_1-1)
   (down tile_0-2 tile_1-2)
   (down tile_0-3 tile_1-3)
   (down tile_1-1 tile_2-1)
   (down tile_1-2 tile_2-2)
   (down tile_1-3 tile_2-3)
   (down tile_2-1 tile_3-1)
   (down tile_2-2 tile_3-2)
   (down tile_2-3 tile_3-3)
   (right tile_0-2 tile_0-1)
   (right tile_0-3 tile_0-2)
   (right tile_1-2 tile_1-1)
   (right tile_1-3 tile_1-2)
   (right tile_2-2 tile_2-1)
   (right tile_2-3 tile_2-2)
   (right tile_3-2 tile_3-1)
   (right tile_3-3 tile_3-2)
   (left tile_0-1 tile_0-2)
   (left tile_0-2 tile_0-3)
   (left tile_1-1 tile_1-2)
   (left tile_1-2 tile_1-3)
   (left tile_2-1 tile_2-2)
   (left tile_2-2 tile_2-3)
   (left tile_3-1 tile_3-2)
   (left tile_3-2 tile_3-3)
)
 (:goal (and
    (painted tile_1-1 red)
    (painted tile_1-2 black)
    (painted tile_1-3 red)
    (painted tile_2-1 black)
    (painted tile_2-2 red)
    (painted tile_2-3 black)
    (painted tile_3-1 red)
    (painted tile_3-2 black)
    (painted tile_3-3 red)
))
 (:metric minimize (total-cost))
)
