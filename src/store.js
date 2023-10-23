import {fromIterable, trace} from '@thi.ng/rstream'


fromIterable([1,2,3]).subscribe(trace('it : '))


self.onmessage = function ({data}){
  self.postMessage('dummy')
}
