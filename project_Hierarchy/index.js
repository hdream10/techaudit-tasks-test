/**
 * Transform data (from data.js file) into a structured tree format 
 * suitable for the `<Tree />` component from the `antd` package.
 * 
 * Requirements:
 * - Use `<Tree />` from `antd` to display the transformed data.
 * - The tree should have only one root node (treeRoot), 
 *   and all subsequent levels should nest within it.
 * - Exclude any data fields that are `null` from the tree structure.
 * 
 * Implementation:
 * - Create a project on CodeSandbox, CodePen, or StackBlitz for this task.
 * - Render the tree structure starting with `treeRoot` as the root node.
 */

const tree = [/* your tree */]; 

const treeRoot = {
	checkable: true,
	disabled: false,
	disableCheckbox: false,
	level: null,
	key: 'tree_root',
	eventKey: 'tree_root',
	value: 'All categories',
	title: 'All categories',
	selectable: true,
	checked: false,
	children: tree,
};