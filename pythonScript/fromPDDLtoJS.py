
#
# Copyright 2015 Hernán M. Foffani
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
#

import sys
from  pddlpy import DomainProblem
from collections import defaultdict
import re

def main():
    # demonumber = int(argv[1])
    domainfile = "domain.pddl"
    problemfile = "opt-p08-016.pddl"
    domprob = DomainProblem(domainfile, problemfile)

    d = defaultdict(list)
    for k, v in domprob.problem.objects.items():
        d[v].append(k)
    d["tile"].sort()
    tiles=d["tile"]
    s=re.split('_|-',tiles[len(tiles)-1])
    height=int(s[1])+1
    width=int(s[2])
    tiles_tmp=[]

    for i in range(0,height):
        for j in range(0,width):
                tiles_tmp.append(["white",str(j)+'*widthTileSize',str(i)+"*heightTileSize"])
    tiles_js="[ "
    for tile in tiles_tmp:
        tiles_js+="['"+str(tile[0])+"', "+str(tile[1])+", "+str(tile[2])+"],"

    tiles_js=tiles_js[:len(tiles_js)-1]+"]"

    colors=d["color"]
    robots={}
    for robot in d["robot"]:
        robots[robot]=[]
    for atom in domprob.problem.initialstate:
        pre=atom.predicate
        if (len(pre)>=3 and "robot" in pre[1]):
            if(pre[0]=='robot-at'):
                s=re.split('_|-',pre[2])
                robots[pre[1]].append({'x':str(int(s[2])-1),'y':s[1]})
            if(pre[0]=='robot-has'):
                robots[pre[1]].append({'color':pre[2]})

    robots_js="[ "
    for robot in robots:
        robots_js+="{x:"+str(robots[robot][0]['x'])+"*widthTileSize, "
        robots_js+="y:"+str(int(robots[robot][0]['y']))+"*heightTileSize, "
        robots_js+="color:"+str(colors.index(robots[robot][1]['color']))+"},"
    robots_js=robots_js[:len(robots_js)-1]+"]"

    goal_tmp=[]
    small_goal_tmp=[]
    for i in range(0,width):
        goal_tmp.append(["white",str(i)+'*widthTileSize',str(0)+"*heightTileSize"])
        small_goal_tmp.append(["white",str(i)+'*goalWidthTileSize',str(0)+"*goalHeightTileSize"])

    for goal in domprob.problem.goals:
        pre=goal.predicate
        s=re.split('_|-',pre[1])
        goal_tmp.append([pre[2],str(int(s[2])-1)+'*widthTileSize',str(s[1])+"*heightTileSize"])
        small_goal_tmp.append([pre[2],str(int(s[2])-1)+'*goalWidthTileSize',str(s[1])+"*goalHeightTileSize"])

    color_js="[ "
    for color in colors:
        color_js+="\""+color+"\","
    color_js=color_js[:len(color_js)-1]+"]"



    goal_js="[ "
    for tile in goal_tmp:
        goal_js+="['"+str(tile[0])+"', "+str(tile[1])+", "+str(tile[2])+"],"

    goal_js=goal_js[:len(goal_js)-1]+"]"

    small_goal_js="["

    for tile in small_goal_tmp:
        small_goal_js+="['"+str(tile[0])+"', "+str(tile[1])+", "+str(tile[2])+"],"
    small_goal_js=small_goal_js[:len(small_goal_js)-1]+"]"



    var = "var g = document.getElementById('goal');\nvar gctx = g.getContext('2d');\n" \
            "var goalHeightTileSize = g.offsetHeight /"+str(height) +";\nvar goalWidthTileSize = g.offsetWidth/"+str(width)+";\n" \
            "var goal_tiles = "+small_goal_js+";\n"\
          "var canvas = document.getElementById('board');\nvar ctx = canvas.getContext('2d');\n" \
          "var heightTileSize = canvas.offsetHeight /"+str(height) +";\nvar widthTileSize = canvas.offsetWidth/"+str(width)+";" \
        "\nvar tiles = "+tiles_js+"; \nvar robot="+robots_js+"; \nvar colors = "+color_js+"; \nvar result_tiles = "+goal_js+"; \n"

    print(var)

    with open("variable.js", "wt") as out_file:
        out_file.write(var)

if __name__ == '__main__':
    main()

