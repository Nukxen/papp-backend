export class userData {
  private readonly user : string;
  private readonly pass : string;
  private readonly email? : string;
}

export class userDataUpdate {
  private readonly user? : string;
  private readonly pass? : string;
  private readonly email? : string;
}

export class userAddCart {
  private readonly id : string;
  private readonly idUser : string;
  private readonly idProduct : string;
}
export class userAddFavorite extends userAddCart {}
