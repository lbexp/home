import fs from 'node:fs';

class FileNode {
  constructor(path) {
    this.path = path;
  }

  async init() {
    const data = await this.readFile(this.path);
    const { dependencies, exports, content } = this.parseFile(data);

    this.dependencies = dependencies;
    this.exports = exports;
    this.content = content;
  }

  async readFile(path) {
    try {
      return await fs.readFileSync(path, 'utf8');
    } catch (err) {
      console.error('Failed to read source:', err.message);
      return '';
    }
  }

  parseFile(fileString) {
    console.log(fileString);
    return {
      dependencies: {},
      exports: {},
      content: {},
    };
  }
}

async function bundar(path) {
  /*
   * 1.Create dependency trees
   */
  const fileTrees = new FileNode(path);
  fileTrees.init();
  /*
   * 2.Read entry point
   */
  /*
   * 2.1.Get dependencies
   */
  /*
   * 2.2.Save dependencies to dependency trees
   */
  /*
   * 2.3.Get all the codes, and start writes on new file
   */
}

export default bundar;
