#!/bin/bash

echo " please choose your hero :  (1,2,3)

		1-prisoner
		2-king
		3-witcher "
read hero

case $hero  in
		1) 
			hp="10"
			type="prisoner"
			attack="20"
			;;
		2)
			hp="30"
			type="KING"
			attack="5"
			;;
		3)
			hp="5"
			type="witcher"
			attack="30"
			;;
esac

sleep 1

echo " hello , you are a $type , you hp is $hp point and your attack power is $attack point "

sleep 1


rand=$(( $RANDOM % 2 ))

echo "beast approching pick a number (0/1) or (q) to quit "

read num
if [[ $num == "q" ]]; then
        echo "good bye"
        exit 1
elif [[ $rand  == $num ]]; then 
	echo "you live"
else
	echo "you died"
        ./eldenring.sh
fi

sleep 2

boss=$(( $RANDOM % 10 ))
echo "boss aproaching , pick a number from 0-9 (0-9) or (q) to quit "

read num
if [[ $num == "q" ]]; then
        echo "good bye"
        exit 
elif [[ $boss == $num ]]; then
       echo "you live" 
else
       echo "you died"
       ./eldenring.sh
fi
