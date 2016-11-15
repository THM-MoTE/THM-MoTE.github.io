#!/bin/bash

mirror=~/Downloads/tmp-mirror
startDir=$(pwd)

# create static site
bundle exec jekyll build

#clone a copy & switch to master
git clone git@github.com:THM-MoTE/THM-MoTE.github.io.git $mirror
cd $mirror
git checkout master

#copy static site to master branch
cp -R $startDir/_site/* $mirror

#add,commit,push
git add .
git commit -m "update content"
git push origin master
