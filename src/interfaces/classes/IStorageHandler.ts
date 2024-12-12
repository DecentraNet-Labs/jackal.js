import {
  IBroadcastOptions,
  IBroadcastOrChainOptions,
  IBuyStorageOptions,
  IChildMetaDataMap,
  ICloneSharesOptions,
  ICloneUploadOptions,
  ICreateFolderOptions,
  IDeleteTargetOptions,
  IDownloadByUlidOptions,
  IDownloadTracker,
  IFileMetaData,
  IFileParticulars,
  IFolderMetaData,
  IMetaDataByUlidOptions,
  IMoveRenameResourceOptions,
  IReadFolderContentOptions,
  IRemoveShareRecordOptions,
  IShareLinkOptions,
  IShareLinks,
  IShareMetaData,
  IUnshareOptions,
  TLoadThumbnailOptions,
  IFolderMetaHandler,
  IProviderIpSet,
  IProviderUploadResponse,
  IShareOptions,
  IStagedUploadPackage,
  IStorageStatus,
  IUploadPackage,
  IWrappedEncodeObject
} from '@/interfaces'
import type { TMetaDataSets } from '@/types'

export interface IStorageHandler {
  cleanShutdown (): void

  registerPubKey (options?: IBroadcastOrChainOptions): Promise<IWrappedEncodeObject[]>

  loadDirectory (options?: IReadFolderContentOptions): Promise<void>

  readDirectoryContents (path: string, options?: IReadFolderContentOptions): Promise<IChildMetaDataMap>

  loadShared (): Promise<void>

  listChildFolders (): string[]

  listChildFolderMetas (): IFolderMetaData[]

  listChildFiles (): string[]

  listChildFileMetas (): IFileMetaData[]

  getChildren(): IChildMetaDataMap

  upgradeSigner (): Promise<void>

  getAvailableProviders (): Promise<string[]>

  findProviderIps (providers: string[]): Promise<IProviderIpSet>

  loadProviderPool (providers?: IProviderIpSet): Promise<void>

  initStorage (options?: IBroadcastOrChainOptions): Promise<any>

  checkAndInitSharing (options?: IBroadcastOrChainOptions): Promise<IWrappedEncodeObject[]>

  planStatus (): Promise<IStorageStatus>

  estimateStoragePlan (options: IBuyStorageOptions): Promise<number>

  purchaseStoragePlan (options: IBuyStorageOptions): Promise<any>

  createFolders (options: ICreateFolderOptions): Promise<IWrappedEncodeObject[]>

  saveFolder (bundle: IStagedUploadPackage): Promise<IWrappedEncodeObject[]>

  moveRenameResource (options: IMoveRenameResourceOptions): Promise<IWrappedEncodeObject[]>

  readActivePath (): string

  readCurrentLocation (): string

  readCurrentUlid (): string

  readChildCount (): number

  readMustConvertStatus (): boolean

  readCurrentQueue (): string[]
  
  getCurrentQueue(): IUploadPackage[]
  
  getCurrentMeta(): IFolderMetaHandler

  removeFromQueue (name: string): void

  clearQueue(): void

  queuePrivate (toQueue: File | File[], duration?: number): Promise<number>

  queuePublic (toQueue: File | File[], duration?: number): Promise<number>

  cloneShares (options: ICloneSharesOptions): Promise<IWrappedEncodeObject[]>

  cloneUpload (options: ICloneUploadOptions): Promise<IWrappedEncodeObject[]>

  processAllQueues (options?: IBroadcastOptions): Promise<void>

  loadThumbnail (options: TLoadThumbnailOptions): Promise<string>

  getMetaDataByUlid (options: IMetaDataByUlidOptions): Promise<TMetaDataSets>

  getFolderDetailsByUlid (options: IMetaDataByUlidOptions): Promise<IChildMetaDataMap>

  findUlid (path: string, address?: string): string

  getFileMetaData (filePath: string, address?: string): Promise<IFileMetaData>

  uploadFile(
    url: string,
    startBlock: number,
    file: File,
    merkle: string,
  ): Promise<IProviderUploadResponse>

  uploadFile(
    url: string,
    startBlock: number,
    file: File,
    merkle: string,
  ): Promise<IProviderUploadResponse>

  getFileParticulars (filePath: string): Promise<IFileParticulars>

  downloadFile (filePath: string, trackers: IDownloadTracker): Promise<File>

  downloadExternalFile (
    userAddress: string,
    filePath: string,
    trackers: IDownloadTracker,
  ): Promise<File>

  downloadByUlid (options: IDownloadByUlidOptions): Promise<File>

  deleteTargets (options: IDeleteTargetOptions): Promise<IWrappedEncodeObject[]>

  checkSharedTo (path: string): Promise<string[]>

  shareDirect (options: IShareOptions): Promise<IWrappedEncodeObject[]>

  shareLink (options: IShareLinkOptions): Promise<IShareLinks>

  unshare (options: IUnshareOptions): Promise<IWrappedEncodeObject[]>

  removeShareRecord (options: IRemoveShareRecordOptions): Promise<IWrappedEncodeObject[]>

  checkNotifications (): Promise<number>

  processPendingNotifications (options?: IBroadcastOrChainOptions): Promise<IWrappedEncodeObject[]>

  readSharing (sharer?: string): Promise<IFolderMetaData[] | IShareMetaData[]>

  convert (options?: IBroadcastOrChainOptions): Promise<IWrappedEncodeObject[]>

  checkIfUpcycle (): boolean

  checkAndUpcycle (options?: IBroadcastOptions): Promise<void>

  runUpcycleQueue (options?: IBroadcastOptions): Promise<void>
}
