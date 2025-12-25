/* tslint:disable */
/* eslint-disable */

export class AlbumCoverMetadatum {
  private constructor();
  free(): void;
  [Symbol.dispose](): void;
  readonly data: Uint8Array;
  readonly mimeType: string;
}

export class CommentMetadatum {
  private constructor();
  free(): void;
  [Symbol.dispose](): void;
  readonly description: string;
  readonly lang: string;
  readonly text: string;
}

export class ExtendedTextMetadatum {
  private constructor();
  free(): void;
  [Symbol.dispose](): void;
  readonly description: string;
  readonly value: string;
}

export class Metadata {
  private constructor();
  free(): void;
  [Symbol.dispose](): void;
  get trackIndex(): number | undefined;
  set trackIndex(value: number | null | undefined);
  get trackCount(): number | undefined;
  set trackCount(value: number | null | undefined);
  get discIndex(): number | undefined;
  set discIndex(value: number | null | undefined);
  get discCount(): number | undefined;
  set discCount(value: number | null | undefined);
  get year(): number | undefined;
  set year(value: number | null | undefined);
  get duration(): number | undefined;
  set duration(value: number | null | undefined);
  readonly albumCover: AlbumCoverMetadatum | undefined;
  readonly albumArtist: string | undefined;
  readonly dateRecorded: string | undefined;
  readonly dateReleased: string | undefined;
  readonly album: string | undefined;
  readonly genre: string | undefined;
  readonly title: string | undefined;
  readonly artist: string | undefined;
  readonly lyrics: Array<any>;
  readonly comments: Array<any>;
  readonly publisher: string | undefined;
}

export class TagController {
  private constructor();
  free(): void;
  [Symbol.dispose](): void;
  addLyrics(lyrics: CommentMetadatum): void;
  setArtist(artist: string): void;
  removeYear(): void;
  static fromPartial(head: Uint8Array, tail?: Uint8Array | null): TagController;
  getMetadata(): Metadata;
  /**
   * Puts the tag into the buffer and returns the new buffer.
   * Not-in-place method.
   */
  putTagInto(buffer: Uint8Array): Uint8Array;
  removeAlbum(): void;
  removeGenre(): void;
  removeTitle(): void;
  setDuration(duration_in_seconds: number): void;
  removeArtist(): void;
  setPublisher(publisher: string): void;
  setDiscCount(disc_count: number): void;
  setDiscIndex(disc_index: number): void;
  setTrackCount(track_count: number): void;
  setTrackIndex(track_index: number): void;
  setAlbumArtist(album_artist: string): void;
  removeDiscCount(): void;
  removeDiscIndex(): void;
  /**
   * yyyy-MM-ddTHH:mm:ss
   */
  setDateRecorded(timestamp: string): void;
  setDateReleased(timestamp: string): void;
  removeTrackCount(): void;
  removeTrackIndex(): void;
  removeAlbumArtist(): void;
  static new(): TagController;
  static from(buffer: Uint8Array): TagController;
  setYear(year: number): void;
  setAlbum(album: string): void;
  setGenre(genre: string): void;
  setTitle(title: string): void;
}

export function hasId3v2Tag(head: Uint8Array): boolean;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_albumcovermetadatum_free: (a: number, b: number) => void;
  readonly __wbg_commentmetadatum_free: (a: number, b: number) => void;
  readonly __wbg_extendedtextmetadatum_free: (a: number, b: number) => void;
  readonly __wbg_get_metadata_discCount: (a: number) => number;
  readonly __wbg_get_metadata_discIndex: (a: number) => number;
  readonly __wbg_get_metadata_duration: (a: number) => number;
  readonly __wbg_get_metadata_trackCount: (a: number) => number;
  readonly __wbg_get_metadata_trackIndex: (a: number) => number;
  readonly __wbg_get_metadata_year: (a: number) => number;
  readonly __wbg_metadata_free: (a: number, b: number) => void;
  readonly __wbg_set_metadata_discCount: (a: number, b: number) => void;
  readonly __wbg_set_metadata_discIndex: (a: number, b: number) => void;
  readonly __wbg_set_metadata_duration: (a: number, b: number) => void;
  readonly __wbg_set_metadata_trackCount: (a: number, b: number) => void;
  readonly __wbg_set_metadata_trackIndex: (a: number, b: number) => void;
  readonly __wbg_set_metadata_year: (a: number, b: number) => void;
  readonly __wbg_tagcontroller_free: (a: number, b: number) => void;
  readonly albumcovermetadatum_data: (a: number) => any;
  readonly albumcovermetadatum_mimeType: (a: number) => [number, number];
  readonly commentmetadatum_description: (a: number) => [number, number];
  readonly commentmetadatum_lang: (a: number) => [number, number];
  readonly commentmetadatum_text: (a: number) => [number, number];
  readonly extendedtextmetadatum_description: (a: number) => [number, number];
  readonly extendedtextmetadatum_value: (a: number) => [number, number];
  readonly hasId3v2Tag: (a: number, b: number) => number;
  readonly metadata_album: (a: number) => [number, number];
  readonly metadata_albumArtist: (a: number) => [number, number];
  readonly metadata_albumCover: (a: number) => number;
  readonly metadata_artist: (a: number) => [number, number];
  readonly metadata_comments: (a: number) => any;
  readonly metadata_dateRecorded: (a: number) => [number, number];
  readonly metadata_dateReleased: (a: number) => [number, number];
  readonly metadata_genre: (a: number) => [number, number];
  readonly metadata_lyrics: (a: number) => any;
  readonly metadata_publisher: (a: number) => [number, number];
  readonly metadata_title: (a: number) => [number, number];
  readonly tagcontroller_addLyrics: (a: number, b: number) => void;
  readonly tagcontroller_from: (a: number, b: number) => [number, number, number];
  readonly tagcontroller_fromPartial: (a: number, b: number, c: number, d: number) => [number, number, number];
  readonly tagcontroller_getMetadata: (a: number) => number;
  readonly tagcontroller_new: () => number;
  readonly tagcontroller_putTagInto: (a: number, b: number, c: number) => [number, number, number];
  readonly tagcontroller_removeAlbum: (a: number) => void;
  readonly tagcontroller_removeAlbumArtist: (a: number) => void;
  readonly tagcontroller_removeArtist: (a: number) => void;
  readonly tagcontroller_removeDiscCount: (a: number) => void;
  readonly tagcontroller_removeDiscIndex: (a: number) => void;
  readonly tagcontroller_removeGenre: (a: number) => void;
  readonly tagcontroller_removeTitle: (a: number) => void;
  readonly tagcontroller_removeTrackCount: (a: number) => void;
  readonly tagcontroller_removeTrackIndex: (a: number) => void;
  readonly tagcontroller_removeYear: (a: number) => void;
  readonly tagcontroller_setAlbum: (a: number, b: number, c: number) => void;
  readonly tagcontroller_setAlbumArtist: (a: number, b: number, c: number) => void;
  readonly tagcontroller_setArtist: (a: number, b: number, c: number) => void;
  readonly tagcontroller_setDateRecorded: (a: number, b: number, c: number) => [number, number];
  readonly tagcontroller_setDateReleased: (a: number, b: number, c: number) => [number, number];
  readonly tagcontroller_setDiscCount: (a: number, b: number) => void;
  readonly tagcontroller_setDiscIndex: (a: number, b: number) => void;
  readonly tagcontroller_setDuration: (a: number, b: number) => void;
  readonly tagcontroller_setGenre: (a: number, b: number, c: number) => void;
  readonly tagcontroller_setPublisher: (a: number, b: number, c: number) => void;
  readonly tagcontroller_setTitle: (a: number, b: number, c: number) => void;
  readonly tagcontroller_setTrackCount: (a: number, b: number) => void;
  readonly tagcontroller_setTrackIndex: (a: number, b: number) => void;
  readonly tagcontroller_setYear: (a: number, b: number) => void;
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __externref_table_dealloc: (a: number) => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
