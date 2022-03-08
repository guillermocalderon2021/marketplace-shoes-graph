import { BigInt } from "@graphprotocol/graph-ts"
import {
  NFTMarket,
  AddUserRole,
  MarketItemCreated,
  MarketSale,
  RemoveUserRole
} from "../generated/NFTMarket/NFTMarket"
import { Account, Item } from "../generated/schema"
import {  NFT as NftContract } from "../generated/NFT/NFT"

export function handleAddUserRole(event: AddUserRole): void {

  let user = Account.load(event.params.account.toHexString());
  if (!user) {
    user=new Account(event.params.account.toHexString());
  }
  if(!(user.role==='ADMIN')){
    user.role= event.params.role.toString();
  }
  user.save();
}

export function handleMarketItemCreated(event: MarketItemCreated): void {
  let item = Item.load(event.params.itemId.toString());
  if (!item) {
    item = new Item(event.params.itemId.toString());
    item.tokenID=event.params.tokenId;
    item.price=event.params.price;
    item.creator=event.params.seller.toHexString();
    item.owner=event.params.ContractOwner_.toHexString();
    item.price=event.params.price;
    let nftContract=NftContract.bind(event.address);
    item.contentURI=nftContract.tokenURI(event.params.tokenId);
  }
  item.save();
    
  let account = Account.load(event.params.seller.toHexString());
  if (!account) {
    account = new Account(event.params.seller.toHexString());
    account.save();
  }

  let account2 = Account.load(event.params.ContractOwner_.toHexString());
  if (!account2) {
    account2 = new Account(event.params.ContractOwner_.toHexString());
    account2.save();
  }


}

export function handleMarketSale(event: MarketSale): void {
  let item = Item.load(event.params.itemId.toString());
  if (item) {
    item.owner=event.params.buyer.toHexString();
    item.save();
  }
  
    
  let account = Account.load(event.params.buyer.toHexString());
  if (!account) {
    account = new Account(event.params.buyer.toHexString());
    account.save();
  }
}

export function handleRemoveUserRole(event: RemoveUserRole): void {}


