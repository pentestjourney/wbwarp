import List "mo:base/List";
import Array "mo:base/Array";
import Nat "mo:base/Nat";
import Debug "mo:base/Debug";

actor Dpost {
  public type Post = {
    postId: Nat;
    title: Text;
    content: Text;
    contact: Text;
  };

  var posts: List.List<Post> = List.nil<Post>();
  var lastPostId: Nat = 0;

  private func generatePostId(): Nat {
    lastPostId := Nat.add(lastPostId, 1);
    return lastPostId;
  };

  public func createPost(titleText: Text, contentText: Text, contactText: Text): async () {
    let newPost: Post = {
      postId = generatePostId();
      title = titleText;
      content = contentText;
      contact = contactText;
    };

    posts := List.push(newPost, posts);
    Debug.print(debug_show(posts));
  };


  public query func readPost(): async [Post] {
    return List.toArray(posts);
  };
  public func deletePost(postIdToDelete: Nat): async () {
  // Filter the list to exclude the post with the given postId
  posts := List.filter(posts, func(post: Post): Bool {
    return post.postId != postIdToDelete;
  });
  
};

}

