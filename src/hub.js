import { fromWorker, postWorker, stream, trace } from '@thi.ng/rstream'

const store = new Worker('./store.js')
store.onerror = console.error

const req$ = stream().subscribe(postWorker(store))

export const setState = async ({ data }) => {
  // SetState Logic
  return data
}

export const req = data => req$.next(data)

fromWorker(store).map(setState).subscribe(trace('setState'))

// reqStoreWorker |> resFromWorker |>  handlerFromWorker |> setStateValue
