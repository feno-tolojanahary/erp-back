// this utils help you to get All Attributes from migrations file

class MockQueryInterface {
    attributeTables: any;
    constructor() {
      this.attributeTables = {}
    }
  
    setAttribute(tableName: string, attributes : any) {
      this.attributeTables[tableName] = {
        ...(this.attributeTables[tableName] || {}),
        ...(attributes || {}),
      }
    }
  
    deleteAttribute(tableName: string, attributeName: string) {
      const defTable = this.attributeTables[tableName]
      if (defTable) {
        delete defTable[attributeName]
      }
    }
  
    getAttribute(tableName: string, attributeName: string) {
      const defTable = this.attributeTables[tableName]
      if (defTable) {
        return defTable[attributeName]
      }
  
      return null
    }
  
    createTable(tableName: string, attributes: any) {
      this.setAttribute(tableName, attributes)
    }
  
    addColumn(table: any, key: string, attribute: any) {
      this.setAttribute(table, {
        [key]: attribute,
      })
    }
  
    changeColumn(tableName: string, attributeName: string, dataTypeOrOptions: any, options: any) {
      this.setAttribute(tableName, {
        [attributeName]: dataTypeOrOptions,
      })
    }
  
    removeColumn(tableName: string, attributeName: string) {
      this.deleteAttribute(tableName, attributeName)
    }
  
    renameColumn(tableName: string, attrNameBefore: string, attrNameAfter: string, options: any) {
      const curAttribute = this.getAttribute(tableName, attrNameBefore)
      this.setAttribute(tableName, {
        [attrNameAfter]: curAttribute,
      })
      this.deleteAttribute(tableName, attrNameBefore)
    }
  
    renameTable(before: string, after: string, options: any) {
      this.attributeTables[after] = this.attributeTables[before]
  
      delete this.attributeTables[before]
    }
  
    addConstraint() {
      return this
    }
  }
  
  const fs = require('fs')
  const path = require('path')
  
  function read(sequelize: any, mockQueryInterface: any) {
    const basePath = path.resolve(`sequelize/migrations`)
  
    const files = fs.readdirSync(basePath)
    files.forEach((file: any) => {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      const script = require([basePath, file].join('/'))
      script.up(mockQueryInterface, sequelize)
    })
  }
  
  module.exports = {
    MockQueryInterface,
    read,
  }
  