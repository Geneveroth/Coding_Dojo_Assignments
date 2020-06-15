public class SinglyLinkedList {
    public Node head;
    public SinglyLinkedList() {
     this.head=null;
    }
    public void add(int value) {
        Node newNode = new Node(value);
        if(head == null) {
            head = newNode;
        } else {
            Node runner = head;
            while(runner.next != null) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }
       public SinglyLinkedList remove(){
		   Node runner=this.head;
    	   while(runner.next.next!= null) {
    		   runner=runner.next;
    		   }
    	   runner.setNext(null);
    	   return this;
       }
       public void printAll() {
    	   if(this.head!=null) {
    		   Node runner=this.head;
    		   while(runner!=null) {
	    		   int val=runner.getValue();
	    		   System.out.println(val);
	    		   runner=runner.next;
	    	   }    	   
    	   }
       }
       public Node find(int val){
   		   Node runner=this.head;
    		   while(runner!=null) {
    			   runner=runner.next;
    			   if(runner.getValue()==val) {
    				   return runner;
    			   }
    			   else {
    				   runner=runner.next;
    			   }		   
    		   }
    	   return null;
       }
}
