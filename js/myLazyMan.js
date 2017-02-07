/**
 * Created by knight on 17/2/7.
 */

function MyLazyMan(name) {
    var self = this;
    this.name = name;
    this.tasks = [];
    var initTask = (function (name) {
        return function () {
            console.log('Hi!I am ' + name);
            self.next();
        };
    }(name));
    this.tasks.push(initTask);
    setTimeout(function () {
        console.log('--- 执行第一个next');
        self.next();
    }, 0);
    console.log('*** 构造函数执行完毕');
}

MyLazyMan.prototype.next = function () {
    var firstTask = this.tasks.shift();
    firstTask && firstTask();

};

MyLazyMan.prototype.eat = function (mealName) {
    var self = this;
    var eatTask = (function (mealName) {
        return function () {
            console.log('Eat ' + mealName);
            self.next();
        };
    }(mealName));
    this.tasks.push(eatTask);
    console.log('*** eat 执行完毕');
    console.warn(this.tasks.length);
    return this;
};

MyLazyMan.prototype.sleep = function (delay) {
    var self = this;
    var sleepTask = (function (delay) {
        return function () {
            setTimeout(function () {
                console.log('Wake up after ' + delay);
                self.next();
            }, delay * 1000);
        };
    }(delay));
    this.tasks.push(sleepTask);
    return this;
};

MyLazyMan.prototype.sleepFirst = function (delay) {
    var self = this;
    var sleepFirsyTask = (function (delay) {
        return function () {
          setTimeout(function () {
              console.log('Wake up after ' + delay);
              self.next();
          },delay * 1000);
        };
    }(delay));
    this.tasks.unshift(sleepFirsyTask);
    return this;
};


function LazyMan(name) {
    return new MyLazyMan(name);
}

// LazyMan('James');
// LazyMan('James').eat('supper').eat('dinner');
// LazyMan('James').sleep(5).eat('dinner');
LazyMan('James').sleepFirst(5).eat('dinner');
// console.info('--- 客户端调用完毕');