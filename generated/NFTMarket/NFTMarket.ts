// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AddUserRole extends ethereum.Event {
  get params(): AddUserRole__Params {
    return new AddUserRole__Params(this);
  }
}

export class AddUserRole__Params {
  _event: AddUserRole;

  constructor(event: AddUserRole) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get role(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class MarketItemCreated extends ethereum.Event {
  get params(): MarketItemCreated__Params {
    return new MarketItemCreated__Params(this);
  }
}

export class MarketItemCreated__Params {
  _event: MarketItemCreated;

  constructor(event: MarketItemCreated) {
    this._event = event;
  }

  get itemId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get nftContract(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get ContractOwner_(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get sold(): boolean {
    return this._event.parameters[6].value.toBoolean();
  }
}

export class MarketSale extends ethereum.Event {
  get params(): MarketSale__Params {
    return new MarketSale__Params(this);
  }
}

export class MarketSale__Params {
  _event: MarketSale;

  constructor(event: MarketSale) {
    this._event = event;
  }

  get itemId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get nftContract(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get buyer(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class RemoveUserRole extends ethereum.Event {
  get params(): RemoveUserRole__Params {
    return new RemoveUserRole__Params(this);
  }
}

export class RemoveUserRole__Params {
  _event: RemoveUserRole;

  constructor(event: RemoveUserRole) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get role(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class NFTMarket__fetchItemsCreatedResultValue0Struct extends ethereum.Tuple {
  get itemId(): BigInt {
    return this[0].toBigInt();
  }

  get nftContract(): Address {
    return this[1].toAddress();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get seller(): Address {
    return this[3].toAddress();
  }

  get contractOwner_(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get sold(): boolean {
    return this[6].toBoolean();
  }
}

export class NFTMarket__fetchMarketItemsResultValue0Struct extends ethereum.Tuple {
  get itemId(): BigInt {
    return this[0].toBigInt();
  }

  get nftContract(): Address {
    return this[1].toAddress();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get seller(): Address {
    return this[3].toAddress();
  }

  get contractOwner_(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get sold(): boolean {
    return this[6].toBoolean();
  }
}

export class NFTMarket__fetchMyNFTsResultValue0Struct extends ethereum.Tuple {
  get itemId(): BigInt {
    return this[0].toBigInt();
  }

  get nftContract(): Address {
    return this[1].toAddress();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get seller(): Address {
    return this[3].toAddress();
  }

  get contractOwner_(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get sold(): boolean {
    return this[6].toBoolean();
  }
}

export class NFTMarket__getMarketItemResultValue0Struct extends ethereum.Tuple {
  get itemId(): BigInt {
    return this[0].toBigInt();
  }

  get nftContract(): Address {
    return this[1].toAddress();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get seller(): Address {
    return this[3].toAddress();
  }

  get contractOwner_(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get sold(): boolean {
    return this[6].toBoolean();
  }
}

export class NFTMarket extends ethereum.SmartContract {
  static bind(address: Address): NFTMarket {
    return new NFTMarket("NFTMarket", address);
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  MINTER_ROLE(): Bytes {
    let result = super.call("MINTER_ROLE", "MINTER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_MINTER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("MINTER_ROLE", "MINTER_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  fetchItemsCreated(): Array<NFTMarket__fetchItemsCreatedResultValue0Struct> {
    let result = super.call(
      "fetchItemsCreated",
      "fetchItemsCreated():((uint256,address,uint256,address,address,uint256,bool)[])",
      []
    );

    return result[0].toTupleArray<
      NFTMarket__fetchItemsCreatedResultValue0Struct
    >();
  }

  try_fetchItemsCreated(): ethereum.CallResult<
    Array<NFTMarket__fetchItemsCreatedResultValue0Struct>
  > {
    let result = super.tryCall(
      "fetchItemsCreated",
      "fetchItemsCreated():((uint256,address,uint256,address,address,uint256,bool)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<NFTMarket__fetchItemsCreatedResultValue0Struct>()
    );
  }

  fetchMarketItems(): Array<NFTMarket__fetchMarketItemsResultValue0Struct> {
    let result = super.call(
      "fetchMarketItems",
      "fetchMarketItems():((uint256,address,uint256,address,address,uint256,bool)[])",
      []
    );

    return result[0].toTupleArray<
      NFTMarket__fetchMarketItemsResultValue0Struct
    >();
  }

  try_fetchMarketItems(): ethereum.CallResult<
    Array<NFTMarket__fetchMarketItemsResultValue0Struct>
  > {
    let result = super.tryCall(
      "fetchMarketItems",
      "fetchMarketItems():((uint256,address,uint256,address,address,uint256,bool)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<NFTMarket__fetchMarketItemsResultValue0Struct>()
    );
  }

  fetchMyNFTs(): Array<NFTMarket__fetchMyNFTsResultValue0Struct> {
    let result = super.call(
      "fetchMyNFTs",
      "fetchMyNFTs():((uint256,address,uint256,address,address,uint256,bool)[])",
      []
    );

    return result[0].toTupleArray<NFTMarket__fetchMyNFTsResultValue0Struct>();
  }

  try_fetchMyNFTs(): ethereum.CallResult<
    Array<NFTMarket__fetchMyNFTsResultValue0Struct>
  > {
    let result = super.tryCall(
      "fetchMyNFTs",
      "fetchMyNFTs():((uint256,address,uint256,address,address,uint256,bool)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<NFTMarket__fetchMyNFTsResultValue0Struct>()
    );
  }

  getListingPrice(): BigInt {
    let result = super.call(
      "getListingPrice",
      "getListingPrice():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getListingPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getListingPrice",
      "getListingPrice():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getMarketItem(itemId: BigInt): NFTMarket__getMarketItemResultValue0Struct {
    let result = super.call(
      "getMarketItem",
      "getMarketItem(uint256):((uint256,address,uint256,address,address,uint256,bool))",
      [ethereum.Value.fromUnsignedBigInt(itemId)]
    );

    return changetype<NFTMarket__getMarketItemResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getMarketItem(
    itemId: BigInt
  ): ethereum.CallResult<NFTMarket__getMarketItemResultValue0Struct> {
    let result = super.tryCall(
      "getMarketItem",
      "getMarketItem(uint256):((uint256,address,uint256,address,address,uint256,bool))",
      [ethereum.Value.fromUnsignedBigInt(itemId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<NFTMarket__getMarketItemResultValue0Struct>(value[0].toTuple())
    );
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isAdmin(account: Address): boolean {
    let result = super.call("isAdmin", "isAdmin(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_isAdmin(account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isAdmin", "isAdmin(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isMinter(account: Address): boolean {
    let result = super.call("isMinter", "isMinter(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_isMinter(account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isMinter", "isMinter(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  priceOf(itemId: BigInt): BigInt {
    let result = super.call("priceOf", "priceOf(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(itemId)
    ]);

    return result[0].toBigInt();
  }

  try_priceOf(itemId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("priceOf", "priceOf(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(itemId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddAdminCall extends ethereum.Call {
  get inputs(): AddAdminCall__Inputs {
    return new AddAdminCall__Inputs(this);
  }

  get outputs(): AddAdminCall__Outputs {
    return new AddAdminCall__Outputs(this);
  }
}

export class AddAdminCall__Inputs {
  _call: AddAdminCall;

  constructor(call: AddAdminCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddAdminCall__Outputs {
  _call: AddAdminCall;

  constructor(call: AddAdminCall) {
    this._call = call;
  }
}

export class AddMinterCall extends ethereum.Call {
  get inputs(): AddMinterCall__Inputs {
    return new AddMinterCall__Inputs(this);
  }

  get outputs(): AddMinterCall__Outputs {
    return new AddMinterCall__Outputs(this);
  }
}

export class AddMinterCall__Inputs {
  _call: AddMinterCall;

  constructor(call: AddMinterCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddMinterCall__Outputs {
  _call: AddMinterCall;

  constructor(call: AddMinterCall) {
    this._call = call;
  }
}

export class CreateMarketItemCall extends ethereum.Call {
  get inputs(): CreateMarketItemCall__Inputs {
    return new CreateMarketItemCall__Inputs(this);
  }

  get outputs(): CreateMarketItemCall__Outputs {
    return new CreateMarketItemCall__Outputs(this);
  }
}

export class CreateMarketItemCall__Inputs {
  _call: CreateMarketItemCall;

  constructor(call: CreateMarketItemCall) {
    this._call = call;
  }

  get nftContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CreateMarketItemCall__Outputs {
  _call: CreateMarketItemCall;

  constructor(call: CreateMarketItemCall) {
    this._call = call;
  }
}

export class CreateMarketSaleCall extends ethereum.Call {
  get inputs(): CreateMarketSaleCall__Inputs {
    return new CreateMarketSaleCall__Inputs(this);
  }

  get outputs(): CreateMarketSaleCall__Outputs {
    return new CreateMarketSaleCall__Outputs(this);
  }
}

export class CreateMarketSaleCall__Inputs {
  _call: CreateMarketSaleCall;

  constructor(call: CreateMarketSaleCall) {
    this._call = call;
  }

  get nftContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get itemId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CreateMarketSaleCall__Outputs {
  _call: CreateMarketSaleCall;

  constructor(call: CreateMarketSaleCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class RemoveMinterCall extends ethereum.Call {
  get inputs(): RemoveMinterCall__Inputs {
    return new RemoveMinterCall__Inputs(this);
  }

  get outputs(): RemoveMinterCall__Outputs {
    return new RemoveMinterCall__Outputs(this);
  }
}

export class RemoveMinterCall__Inputs {
  _call: RemoveMinterCall;

  constructor(call: RemoveMinterCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveMinterCall__Outputs {
  _call: RemoveMinterCall;

  constructor(call: RemoveMinterCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}