const visit = require('unist-util-visit');
const isRelativeUrl = require(`is-relative-url`);
const grayMatter = require(`gray-matter`);
const _ = require("lodash");

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'link', node => {
    if (node.url && isRelativeUrl(node.url)) {
      //convert frontmatter to YAML so grayMatter can read.
      var data = grayMatter(`---\n${markdownAST.children[0]['value'].toString()}\n---\n`)['data'];

      //console.log(data['title']);
      // if(data['prefix'] && data['prefix'] != ""){
      //   console.log(data);
      //   //setup URL here, add the prefix and fix link.
      //   //assume prefix's always start with '/'
      //   node.url = `${data['prefix']}${_.trim(node.url, '.md')}`;
      //   //console.log(node.url);
      // } else {
      //   //node.url = `/${_.kebabCase(data['title'])}`;
      // }

      node.url = _.replace(node.url, '.md', '');
      node.url = _.replace(node.url, '../', '');
      node.url = _.replace(node.url, './', '');

      //console.log(`Node url ${node.url}`);

    }
  });

  return markdownAST;
};
