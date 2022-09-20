# DeFi.org Website

DeFi.org website source code and build (served from github pages)

&nbsp;

## Deployment of new content

* Commit any changes to `master` branch on Github

* This will trigger Circle CI job "build and deploy"

* Assuming everything builds smoothly, the website should be updated automatically

&nbsp;

## Development

* Install [Cuttlebelle](https://cuttlebelle.com/):

  ```
  npm install cuttlebelle -g
  ```

* Run watch from the project root to see changes locally:

  ```
  cuttlebelle watch
  ```

### How to setup CI

> Note: this only needs to be done once per repo to enable Circle CI -> Github Pages auto deploy

* Create an ssh key pair with empty passphrase on your local machine:

  ```
  ssh-keygen -t rsa -b 4096 -C "ci-build@orbs.com"
  ```

  > Note: this will generate the files ~/.ssh/id_rsa and ~/.ssh/id_rsa.pub containing the keys

* Open https://app.circleci.com/settings/project/github/defi-org-code/website/ssh and click "Add SSH Key":
  * Hostname: `github.com`
  * Private Key: the full contents of ~/.ssh/id_rsa

* Update the SSH fingerprint (from Circle CI) in the file `.circleci/config.yml` in this repo

* Open https://github.com/defi-org-code/website/settings/keys and click "Add deploy key":
  * Title: `Circle CI github pages write`
  * Key: the full contents of ~/.ssh/id_rsa.pub

&nbsp;

## Design goals

1. Website is static only and served from github pages / CDN directly
2. Most of the website does not require JavaScript in clients to be enabled
3. Website builds and deploys automatically in CI on every commit to master
4. Design language is React (but server-side only since JS is not a hard requirement)
5. Strong separation of code from content so content editors can edit everything by themselves
6. Simplicity and very little magic and magical frameworks

A nice solution meeting these goals was relying on the following:

* https://cuttlebelle.com/ - lean open-source framework for server-side rendering of static websites in React
* https://bulma.io/ - lean open-source css framework for core components / UI that does not rely on JS 

