const visit = require('unist-util-visit');
const grayMatter = require(`gray-matter`);
const _ = require("lodash");

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'link', node => {
    if (
      node.url &&
        !node.url.startsWith('//') &&
        !node.url.startsWith('http') &&
        node.url.startsWith('/') ||
        node.url.startsWith('../')
    ) {

      //convert frontmatter to YAML so grayMatter can read.
      var data = grayMatter(`---\n${markdownAST.children[0]['value'].toString()}\n---\n`)['data'];
      //console.log(data['title']);
      // if(data['prefix'] && data['prefix'] != ""){
      //   console.log("***************************************************");
      //   console.log(data);
      //   //setup URL here, add the prefix and fix link.
      //   //assume prefix's always start with '/'
      //   node.url = `${data['prefix']}${_.trim(node.url, '.md')}`;
      //   //console.log(node.url);
      // } else {
      //   //node.url = `/${_.kebabCase(data['title'])}`;
      // }

      node.url = _.trim(node.url, '.md');
//      console.log(node.url);
      //console.log(JSON.stringify(markdownAST));

    }
  });

  return markdownAST;
};
