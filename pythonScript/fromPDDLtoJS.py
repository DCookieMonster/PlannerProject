
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
    problemfile = "opt-p01-001.pddl"
    domprob = DomainProblem(domainfile, problemfile)

    d = defaultdict(list)
    for k, v in domprob.problem.objects.items():
        d[v].append(k)
    d["tile"].sort()
    tiles=d["tile"]
    s=re.split('_|-',tiles[len(tiles)-1])
    height=int(s[1])+1
    width=int(s[2])
    tiles_js=[]

    for i in range(0,height):
        for j in range(0,width):
                tiles_js.append(["white",str(j)+'*widthTileSize',str(i)+"*heightTileSize"])
    colors=d["color"]
    robots={}
    for robot in d["robot"]:
        robots[robot]=[]
    for atom in domprob.problem.initialstate:
        pre=atom.predicate
        if (len(pre)>=3 and "robot" in pre[1]):
            if(pre[0]=='robot-at'):
                s=re.split('_|-',pre[2])
                robots[pre[1]].append({'x':s[1],'y':s[2]})
            if(pre[0]=='robot-has'):
                robots[pre[1]].append({'color':pre[2]})

    robots_js="[ "
    for robot in robots:
        robots_js+="{x:"+str(robots[robot][0]['x'])+"*widthTileSize, "
        robots_js+="y:"+str(robots[robot][0]['y'])+"*heightTileSize, "
        robots_js+="color:"+str(colors.index(robots[robot][1]['color']))+"},"
    robots_js=robots_js[:len(robots_js)-1]+"]"
    print()

if __name__ == '__main__':
    main()

