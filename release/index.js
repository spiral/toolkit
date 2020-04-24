const path = require('path');
const {zip} = require('zip-a-folder');
const {writeFileSync, mkdirSync, readFileSync, existsSync} = require('fs');
const {Octokit} = require('@octokit/rest');
const {execSync} = require('child_process');

const PERSONAL_TOKEN_PATH = './github_token';
const OWNER = 'spiral';
const REPO = 'toolkit';
const package = JSON.parse(readFileSync('./package.json'));
const output = './release/versions/';
const manifest = JSON.parse(readFileSync('./release/manifest.json'));
const version = package.version;
const tag = `v${package.version}`;
const outputPath = path.resolve(output, tag);


const main = async () => {
    const privateKeyPath = path.resolve(process.env.PERSONAL_TOKEN_PATH || PERSONAL_TOKEN_PATH);
    if (!existsSync(privateKeyPath)) {
        console.error('Personal access token not found at', privateKeyPath);
        console.error('Specify access token path with env variable PRIVATE_KEY_PATH or put it at path', privateKeyPath);
        console.error('Generate your access token at https://github.com/settings/tokens/new');
        return;
    }
    console.log(`=======================================`);
    console.log(`==== Making a draft release ${tag} ====`);
    // console.log(`=======================================`);

    const octokit = new Octokit({
        auth: readFileSync(privateKeyPath, {encoding: 'utf-8'}),
    });
    try {
        const release = await octokit.repos.getReleaseByTag({
            owner: OWNER,
            repo: REPO,
            tag,
        });

        if (release) {
            console.error(`Release tagged ${tag} already exists at ${release.data.html_url}`);
            console.error(`Please update version in package.json to greater value`);
            return;
        }
    } catch (e) {

    }

    // console.log(`=======================================`);
    console.log(`=========  Preparing assets ===========`);
    console.log(`=======================================`);
    execSync('yarn build', {
          stdio: 'inherit',
              stderr: 'inherit',
      });

    mkdirSync(outputPath, {recursive: true});

    console.log(`=======================================`);
    console.log(`==========  Packing assets ============`);
    console.log(`=======================================`);

    await Promise.all(Object.keys(manifest).map(async (key) => {
        const outputName = path.resolve(outputPath, `${key}.zip`);
        console.log(`Generating ${key}.zip...`)
        manifest[key].outputName = outputName;
        await zip(path.resolve(manifest[key].path), outputName);
        console.log(`Generating ${key}.zip done`)
    }));


    console.log(`=======================================`);
    console.log(`======== Creating draft release =======`);
    console.log(`=======================================`);

    const body = Object.keys(manifest).map((key) => `**${manifest[key].label} (${key}.zip)** - ${manifest[key].descr}`).join('\r\n\r\n');

    try {
        const release = await octokit.repos.createRelease({
            owner: OWNER,
            repo: REPO,
            draft: true,
            name: `Version ${version}`,
            body,
            target_commitish: 'develop', // We intentionally create this on develop, so user can change it in release details
            tag_name: tag,
        });

        console.log(`Created at ${release.data.html_url}`);


        console.log(`=======================================`);
        console.log(`========== Uploading assets ===========`);
        console.log(`=======================================`);

        await Promise.all(Object.keys(manifest).map(async (key) => {
            try {
                await octokit.repos.uploadReleaseAsset({
                    owner: OWNER,
                    repo: REPO,
                    release: release.data.id,
                    name: `${key}.zip`,
                    url: release.data.upload_url,
                    label: manifest[key].label || `${key}.zip`,
                    data: readFileSync(manifest[key].outputName),
                });
            } catch (e) {
                console.error(e);
                throw new Error(e);
            }
            console.log(`Uploading ${key}.zip done`)
        }));

        console.log(`=======================================`);
        console.log(`========== Release created ============`);
        console.log(`=======================================`);
        console.log(``);

        console.log(`Go to ${release.data.html_url} to verify data and publish`);
    } catch (e) {
        console.error(e);
        return;
    }

};

main();
