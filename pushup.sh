#!/bin/bash

x=1

while [[ $x -le 10 ]]
do
  read -p "pushup $: press enter to continue" 
 (( x ++ ))
done
echo "done"
