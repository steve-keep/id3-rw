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
