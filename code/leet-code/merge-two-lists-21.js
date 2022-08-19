/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let head = node =  null;
      while(list1 && list2){
          let newNode = new ListNode();
          if(list1.val < list2.val){
              newNode.val = list1.val;
              list1 = list1.next;
          }else{
              newNode.val = list2.val;
              list2 = list2.next;
          }
          if(node == null){
              node = newNode;
              head = node;
          }else{
              node.next = newNode;
              node = node.next;
          }
      }
      if(list1){
        node? node.next  = list1:head = list1;
      }
      if(list2){
         node?node.next  = list2:head = list2;
      } 
  
      return head;
  
  };

let list1 = {
    
}
let list2 = {
    val: 0,
}

console.log(mergeTwoLists(null, null))