# Perigon

This repository is intended to accompany an introductory presentation about
Angular. It was created using the Angular CLI, and follows the guidance given
[here][1] to set it up for a live coding demo.

## Configuration

You need to set up the following aliases:

```
git config --global alias.next '!git checkout `git rev-list HEAD..demo-end | tail -1`'
git config --global alias.prev 'checkout HEAD^'
```

For the Angular CLI commands, so you can e.g. run the tests on a watch as you
go, `npm install @angular/cli`.

## Presenting

After you clone the repo, `git checkout demo-start` to go to the beginning. As
you go through each step, use `git next` to move on to the next commit. If you
need to go back, use `git prev`. Once you've reached the `demo-end` tag, you're
done!

  [1]: https://blog.jayway.com/2015/03/30/using-git-commits-to-drive-a-live-coding-session/
