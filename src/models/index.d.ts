import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Comment {
  readonly id: string;
  readonly content?: string;
  readonly postID?: string;
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

export declare class Post {
  readonly id: string;
  readonly content?: string;
  readonly comments?: (Comment | null)[];
  readonly isHighlight?: boolean;
  readonly title?: string;
  readonly description?: string;
  readonly type?: number;
  readonly tags?: string;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}